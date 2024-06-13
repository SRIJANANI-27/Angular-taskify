import { Component } from '@angular/core';
import { FormGroup,FormBuilder,Validators,AbstractControl,ValidatorFn } from '@angular/forms';
import Swal from 'sweetalert2';
import { models } from '../../models';
import { MeetingService } from '../../../../service/meeting.service';


function notPastDateValidator(control: AbstractControl): {[key: string]: any} | null {
  const selectedDate = new Date(control.value);
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Set hours, minutes, seconds, and milliseconds to 0 for accurate comparison
  
  if (selectedDate < today) {
    return { pastDate: true };
  }
  
  return null;
}

@Component({
  selector: 'app-mform',
  templateUrl: './mform.component.html',
  styleUrl: './mform.component.scss'
})



export class MformComponent {
  projectForm!: FormGroup;
  alertMessage!: string;
  modelsobj: models = new models();
  meetings!: any[];
  

  constructor(private fb: FormBuilder, private api: MeetingService) { 
  this.projectForm = this.fb.group({
    title: ['', [Validators.required]],
    date: ['', [Validators.required, notPastDateValidator]],
    time: ['', [Validators.required]],
    endtime:['',[Validators.required,this.futureTimeValidator()]],
    description: ['', [Validators.required]]
  });
  }
  
  futureTimeValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      // Extract hours and minutes from the input value
      const [hours, minutes] = control.value.split(':').map(Number);
      const selectedTime = new Date();
      selectedTime.setHours(hours);
      selectedTime.setMinutes(minutes);
      selectedTime.setSeconds(0);
      selectedTime.setMilliseconds(0);
  
      const currentTime = new Date();
      currentTime.setSeconds(0);
      currentTime.setMilliseconds(0);
  
      if (selectedTime < currentTime) {
        return { pastTime: true };
      } else {
        return null;
      }
    };
  }

  
  onSubmit(): void {
    if (this.projectForm.valid) {
      const title = this.projectForm.get('title')!.value;
      const date = this.projectForm.get('date')!.value;
      const time = this.projectForm.get('time')!.value;
      const description = this.projectForm.get('description')!.value;
      
      this.alertMessage = `Scheduled a meeting: ${title} on ${date} at ${time}. Description: ${description}`;
      this.projectForm.reset();
    } else {
      this.projectForm.markAllAsTouched(); // Mark all fields as touched to trigger validation messages
    }
  }
  

  getAllEmployee(): void {
    this.api.getUser()
      .subscribe(
        (res) => {
          this.meetings = res;
        },
        () => {
          alert("Error fetching employee data");
        }
      );
  }

  postEmployeeDetails(): void {
   
    this.modelsobj = this.projectForm.value;
    
    this.api.postUser(this.modelsobj)
      .subscribe(
        () => {
          Swal.fire({
            
            icon: "success",
            title: "<span style='font-size: 20px;'>Meeting Scheduled Successfully 👍</span>",
            showConfirmButton: false,
            timer: 1500,
            width:"300px"
          });
          let ref = document.getElementById('cancel');
          if (ref) ref.click();
          this.projectForm.reset();
          this.getAllEmployee();
        },
        () => {
          alert("Error adding employee");
        }
      );
       
      
  }

  
}


