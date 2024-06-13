import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import Swal from 'sweetalert2';
import { usermodel } from '../usermodel';
import { SessionhandlingService } from '../../../service/sessionhandling.service';
import { SubmissionService } from '../../../service/submission.service';
import { TaskService } from '../../../service/task.service';


@Component({
  selector: 'app-submission',
  templateUrl: './submission.component.html',
  styleUrls: ['./submission.component.scss']
})
export class SubmissionComponent implements OnInit {
  projectForm: FormGroup;
  listData: any[] = [];
  submission!: any[];
  modelsobj: usermodel = new usermodel();
  constructor(private fb: FormBuilder, private taskService: TaskService,private api:SubmissionService,private userservice:SessionhandlingService) {
    this.projectForm = this.fb.group({
      title: ['', [Validators.required]],
      assignee: ['', [Validators.required]],
      description: ['', [Validators.required]],
      date: ['', [Validators.required]],
      file: ['', [Validators.required]]
    });
  }

//   onSubmit() {
//     if (this.projectForm.valid) {
//       // Form is valid, proceed with data submission
//       const formData = this.projectForm.value;
      
//       // Add the form data to the service
//       this.taskService.updateFormData(formData);
// console.log(formData)
//       // Optionally, reset the form after successful submission
//       this.projectForm.reset();
//     } else {
//       // Form is not valid, handle accordingly
//       this.markFormGroupTouched(this.projectForm);
//     }

    
//   }

  markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach(control => {
      control.markAsTouched();

      if (control instanceof FormGroup) {
        this.markFormGroupTouched(control);
      }
    });
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    const fileControl = this.projectForm.get('file');

    if (fileControl) {
      fileControl.patchValue(file);

      // Reset the error state for the 'file' control
      if (file) {
        fileControl.setErrors(null);
      }
    }
  }

  

  onSubmit() {
    if (this.projectForm.valid) {
      const formData = this.projectForm.value;
      this.taskService.updateFormData(formData);
      this.projectForm.reset();
      Swal.fire({
        
        icon: "success",
        title: "<span style='font-size: 19px'>Submission has been added</span>",
        showConfirmButton: false,
        timer: 1500,
        width: '300px'
      });
    } else {
      // Handle form validation errors if needed
    }
}

getAllEmployee(): void {
  this.api.getEmployee()
    .subscribe(
      (res) => {
        this.submission = res;
      },
      () => {
        alert("Error fetching employee data");
      }
    );
}

postEmployeeDetails(): void {
  this.modelsobj = this.projectForm.value;
  this.api.postEmployee(this.modelsobj)
    .subscribe(
      () => {
        
        let ref = document.getElementById('cancel');
        if (ref) ref.click();
        this.projectForm.reset();
        this.getAllEmployee();
      },
      () => {
        alert("Error adding employee");
      }
    );

    if (this.projectForm.valid) {
      const formData = this.projectForm.value;
      this.taskService.updateFormData(formData);
      this.projectForm.reset();
      Swal.fire({
        
        icon: "success",
        title: "<span style='font-size: 19px'>Submission has been added</span>",
        showConfirmButton: false,
        timer: 1500,
        width: '300px'
      });
    } else {
      // Handle form validation errors if needed
    }
}
loggedInUsername!: string;
 


ngOnInit(): void {
  this.loggedInUsername = this.userservice.getLoggedInUsername() || '';
 
}

}