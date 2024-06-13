import { Component} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { model } from '../../manager/model';
import Swal from 'sweetalert2';
import { AddusersService } from '../../../service/addusers.service';
import { SessionhandlingService } from '../../../service/sessionhandling.service';

@Component({
  selector: 'app-ausers',
  templateUrl: './ausers.component.html',
  styleUrl: './ausers.component.scss'
})
export class AusersComponent {
  userForm!: FormGroup;
  modelobj: model = new model();
  users!: any[];
  showAdd!:boolean;
  ShowUpdate!:boolean;
  loggedInUsername!: string;

  searchTerm: string = '';
  constructor(private formBuilder: FormBuilder,private service:AddusersService,private userService:SessionhandlingService){
    
  }
  passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,}$/;


  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      usertype: ['', Validators.required],
      name: ['', [Validators.required, Validators.pattern('[A-Za-z\s]+')]],
      age: ['', [Validators.required, Validators.min(21)]],
      gender: ['', Validators.required],
      role: ['', Validators.required],
      joiningdate: ['', Validators.required],
      salary: ['', Validators.required],
      experience: ['', Validators.required],
      userid: ['', Validators.required],
      password: ["", [Validators.required, Validators.pattern(this.passwordRegex)]],
    });

    this.getAllUser();

    // Retrieve logged-in user's name from session or service
    this.loggedInUsername = this.userService.getLoggedInUsername() || '';
  }

  


clickAddEmployee(){
  this.userForm.reset();
  this.showAdd=true;  //by add shows add button or update by click update
  this.ShowUpdate=false;
}
  

getAllUser(): void {
  this.service.getUser()  // by using service geting datas (fetching in table)
    .subscribe(
      (res) => {
        this.users = res;
      },
      () => {
        alert("Error fetching employee data");
      }
    );
}

postEmployeeDetails(): void {
  this.modelobj = this.userForm.value;  //adding datas 
  this.service.postUser(this.modelobj)
    .subscribe(
      () => {
        Swal.fire({
            
          icon: "success",
          title: "<span style='font-size: 20px;'>User added successfully</span>",
          showConfirmButton: false,
          timer: 1500,
          width:"300px"
        });
        let ref = document.getElementById('cancel');
        if (ref) ref.click();
        this.userForm.reset();
        this.getAllUser();
      },
      () => {
        alert("Error adding employee");
      }
    );
}



deleteUser(user: any): void {
  Swal.fire({
    title: "<span style='font-size: 25px;'>Are you sure?</span>",
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!',
    width:"300px"
  }).then((result) => {
    if (result.isConfirmed) {
      this.service.deleteUser(user.id)
        .subscribe(
          () => {
            Swal.fire({
              title: "<span style='font-size: 25px;'>Deleted!</span>",
                text: "User has been deleted",
                icon: "success",
                width:"300px"
              
          });
            this.getAllUser();
          },
          () => {
            console.error("Error deleting employee");
            Swal.fire(
              'Error!',
              'There was an error deleting the user.',
              'error'
            );
          }
        );
    }
  });
}


onEdit(user: any): void {
  this.showAdd=false;
  this.ShowUpdate=true;
  this.modelobj.id=user.id;   //modelobj assigns datatype
  this.userForm.patchValue({  //patchvalue formcontrol update the value from the existing value and stores in name,age show datas in form rendering datas
    usertype:user.usertype,
    name: user.name,
    age: user.age,
    gender: user.gender,
    role: user.role,
    joiningdate: user.joiningdate,
    salary: user.salary,
    experience: user.experience,
    userid: user.userid,
    password: user.password,

  });
}

updateEmployeeDetails(): void { //updating 
  this.modelobj.usertype=this.userForm.value.usertype;
  this.modelobj.name=this.userForm.value.name;
  this.modelobj.age=this.userForm.value.age;
  this.modelobj.gender=this.userForm.value.gender;
  this.modelobj.role=this.userForm.value.role;
  this.modelobj.joiningdate=this.userForm.value.joiningdate;
  this.modelobj.salary=this.userForm.value.salary;
  this.modelobj.experience=this.userForm.value.experience;
  this.modelobj.userid=this.userForm.value.userid;
  this.modelobj.password=this.userForm.value.password;

  this.service.updateUser(this.modelobj, this.modelobj.id)
    .subscribe(
      () => {
        Swal.fire({
            
          icon: "success",
          title: "<span style='font-size: 20px;'>User Updated successfully 👍</span>",
          showConfirmButton: false,
          timer: 1500,
          width:"300px"
        });
        const ref = document.getElementById('cancel');
        if (ref) ref.click();
        this.userForm.reset();
        this.getAllUser();
      },
      () => {
        alert("Error updating employee");
      }
    );
}



getLoggedInUsername() {
  return this.userService.getLoggedInUsername();
}


onSearch() {
  
  console.log('Search term:', this.searchTerm);
  
}


//search 
get filteredUsers() {
  if (!this.searchTerm.trim()) {
    return this.users; // Return all data if search term is empty
  }

  const searchTermLowerCase = this.searchTerm.toLowerCase().trim();

  const filtered = this.users.filter(user => {
    console.log("Current user:", user); 
    return (
      user.name.toLowerCase().includes(searchTermLowerCase) ||
      user.role.toLowerCase().includes(searchTermLowerCase) ||
      user.age.toString().includes(searchTermLowerCase) ||
      user.gender.toLowerCase().includes(searchTermLowerCase) ||
      user.joiningdate.includes(this.searchTerm) ||
      user.salary.toString().includes(searchTermLowerCase) ||
      user.experience.toString().includes(searchTermLowerCase) ||
      user.userid.includes(this.searchTerm) ||
      user.password.includes(this.searchTerm)
    );
  });

  console.log("Filtered users:", filtered); 

  return filtered;
}

}
  











  
