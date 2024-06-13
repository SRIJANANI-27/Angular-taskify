import { Component, OnInit } from '@angular/core';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { latesub } from './latesub';
import { LatesubService } from '../../../service/latesub.service';
import { SessionhandlingService } from '../../../service/sessionhandling.service';

@Component({
  selector: 'app-latesubmission',
  templateUrl: './latesubmission.component.html',
  styleUrl: './latesubmission.component.scss'
})
export class LatesubmissionComponent implements OnInit{

  projectForm: FormGroup;
  modelobj: latesub = new latesub();
  latesub!: any[];
  
lateSubmissions: any[] = [
    { title: 'Late Project 1', assignee: 'John Doe',lastdate: '2022-01-25', submissiondate: '2022-02-01', priority: 'High', reason: 'Incomplete tasks' },
    { title: 'Late Project 2', assignee: 'Jane Doe', lastdate: '2022-11-10',submissiondate: '2022-11-20', priority: 'Medium', reason: 'Unexpected issues' },
    // Add more late submission entries as needed
  ];
  constructor(private fb: FormBuilder,private api:LatesubService,private userService: SessionhandlingService){

   
  this.projectForm = this.fb.group({
    title: ['', [Validators.required]],
    assignee: ['', [Validators.required]],
    description: ['', [Validators.required]],
    priority:['',Validators.required],
    date: ['', [Validators.required]]
  });
  }
  onSubmit() {
    if (this.projectForm.valid) {
      this.projectForm.reset();
     
    } else {
      // Handle form validation errors if needed
    }
  }
  loggedInUsername!: string;
 
 

  ngOnInit(): void {
    this.loggedInUsername = this.userService.getLoggedInUsername() || '';
   
  }

  show(){
    this.projectForm.reset();
    
   
  }
  selectedLateSubmission: any; // Variable to store the selected late submission details

  getAllEmployee(): void {
    this.api.getEmployee()
      .subscribe(
        (res) => {
          this.latesub = res;
        },
        () => {
          alert("Error fetching employee data");
        }
      );
  }

  postEmployeeDetails(): void {
    this.modelobj = this.projectForm.value;
    this.api.postEmployee(this.modelobj)
      .subscribe(
        () => {
          Swal.fire({
        
            icon: "success",
            title:"<span style='font-size: 19px'> Reason sent successfully",
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
