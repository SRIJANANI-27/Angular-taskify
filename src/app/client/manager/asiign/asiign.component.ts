import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { model } from '../model';
import Swal from 'sweetalert2';
import { AssigningtaskService } from '../../../service/assigningtask.service';
import { SessionhandlingService } from '../../../service/sessionhandling.service';
@Component({
  selector: 'app-asiign',
  templateUrl: './asiign.component.html',
  styleUrl: './asiign.component.scss'
})
export class AsiignComponent  {
  loggedInUsername!: string;
  employeeForm!: FormGroup;
  modelobj: model = new model();
  employeeData!: any[];
  showAdd!:boolean;
  ShowUpdate!:boolean;
  filteredEmployeeData: any[] = []; // Array to hold filtered data
  searchTerm: string = ''; //

  constructor(private formBuilder: FormBuilder, private api: AssigningtaskService,private userservice:SessionhandlingService) { }

  ngOnInit(): void {
    this.employeeForm = this.formBuilder.group({
      employeeId: ['', [Validators.required, Validators.maxLength(5)]],
      task: ['', Validators.required],
      priority: ['', Validators.required],
      employee: ['', Validators.required],
      employeeStartDate: ['', Validators.required],
      employeeEndDate: ['', Validators.required],
      department: ['', Validators.required],
      description: ['', Validators.required],
      file: [null, Validators.required] 
    });

    this.getAllEmployee();
    this.loggedInUsername = this.userservice.getLoggedInUsername() || '';
  }
clickAddEmployee(){
  this.employeeForm.reset();
  this.showAdd=true;
  this.ShowUpdate=false;
}
  postEmployeeDetails(): void {
    this.modelobj = this.employeeForm.value;
    this.api.postEmployee(this.modelobj)
      .subscribe(
        () => {
          Swal.fire({
            
            icon: "success",
            title: "<span style='font-size: 20px;'>Task added successfully</span>",
            showConfirmButton: false,
            timer: 1500,
            width:"300px"
          });
          let ref = document.getElementById('cancel');
          if (ref) ref.click();
          this.employeeForm.reset();
          this.getAllEmployee();
        },
        () => {
          alert("Error adding employee");
        }
      );
  }

  getAllEmployee(): void {
    this.api.getEmployee()
      .subscribe(
        (res) => {
          this.employeeData = res;
        },
        () => {
          alert("Error fetching employee data");
        }
      );
  }
  deleteEmployee(submission: any): void {
    Swal.fire({
      title: "<span style='font-size: 25px;'>Are you sure?</span",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      width:"300px"
    }).then((result) => {
      if (result.isConfirmed) {
        this.api.deleteEmployee(submission.id)
          .subscribe(
            () => {
              Swal.fire({
                title: "<span style='font-size: 25px;'>Deleted!</span>",
                text: "Your file has been deleted",
                icon: "success",
                width:"300px"
              });
              this.getAllEmployee();
            },
            () => {
              alert("Error deleting employee");
            }
          );
      }
    });
  }
  

  onEdit(submission: any): void {
    this.showAdd=false;
    this.ShowUpdate=true;
    this.modelobj.id=submission.id;
    this.employeeForm.patchValue({
      employeeId: submission.employeeId,
      task: submission.task,
      priority: submission.priority,
      employee: submission.employee,
      employeeStartDate: submission.employeeStartDate,
      employeeEndDate: submission.employeeEndDate,
      department: submission.department,
      description: submission.description
    });
  }
  updateEmployeeDetails(): void {
    this.modelobj.employeeId=this.employeeForm.value.employeeId;
    this.modelobj.task=this.employeeForm.value.task;
    this.modelobj.priority=this.employeeForm.value.priority;
    this.modelobj.employee=this.employeeForm.value.employee;
    this.modelobj.employeeStartDate=this.employeeForm.value.employeeStartDate;
    this.modelobj.employeeEndDate=this.employeeForm.value.employeeEndDate;
    this.modelobj.department=this.employeeForm.value.department;
    this.modelobj.description=this.employeeForm.value.description;

    this.api.updateEmployee(this.modelobj, this.modelobj.id)
      .subscribe(
        () => {
          Swal.fire({
            
            icon: "success",
            title: "<span style='font-size: 20px;'>Task Updated successfully 👍</span>",
            showConfirmButton: false,
            timer: 1500,
            width:"300px"
          });
          const ref = document.getElementById('cancel');
          if (ref) ref.click();
          this.employeeForm.reset();
          this.getAllEmployee();
        },
        () => {
          alert("Error updating employee");
        }
      );
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    this.employeeForm.get('file')!.setValue(file);

  }

  
  
  // get filteredemployeeData() {
  //   return this.employeeData.filter(submission =>
  //     submission.task.toLowerCase().includes(this.searchTerm.toLowerCase())
  //   );
  // }
  get filteredemployeeData() {
    if (!this.searchTerm.trim()) {
      return this.employeeData; // Return all data if search term is empty
    }
  
    const searchTermLowerCase = this.searchTerm.toLowerCase().trim();
    
    return this.employeeData.filter(submission =>
      submission.task.toLowerCase().includes(searchTermLowerCase) ||
      submission.employeeId.toLowerCase().includes(searchTermLowerCase) ||
      submission.employee.toLowerCase().includes(searchTermLowerCase) ||
      submission.department.toLowerCase().includes(searchTermLowerCase)
      // Add more fields as needed
    );
  }
}  