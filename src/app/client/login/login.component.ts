import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgToastService } from 'ng-angular-popup';
import { HttpClient } from '@angular/common/http';
declare var $: any;
import { User } from './user';
import { AddusersService } from '../../service/addusers.service';
import { SessionhandlingService } from '../../service/sessionhandling.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm!: FormGroup;
  hidePassword: boolean = true;
  errorMessage: string = '';
  isToastShown: boolean = false;



  constructor(private router: Router, private userService: SessionhandlingService, private fb: FormBuilder, private http: HttpClient, private service: AddusersService, private toast: NgToastService) { }
  passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,}$/;


  ngOnInit(): void {
    this.loginForm = this.fb.group({
      selectedUser: ['', Validators.required],
      username: ['', [Validators.required, this.noNumbersOrSpecialCharsValidator()]],
      password: ["", [Validators.required, Validators.pattern(this.passwordRegex)]],



    });
  }
  selectedUser: string = '';
  userName: string = '';
  password: string = '';
  errorUtype: string = '';
  erroruser: string = '';
  errorPassword: string = '';
  loggedInUsername!: string;


  imageSources: { [key: string]: string } = {
    admin: "assets/images/chat4.png",
    user: "assets/images/chat3.png",
    manager: "assets/images/chat2.png"
  };

  updateUserImage(): void {
    const userImage = document.getElementById("user-image") as HTMLImageElement;
    userImage.src = this.imageSources[this.selectedUser] || "../assets/images/chat2.png";
  }

  
  togglePasswordVisibility(): void {
    this.hidePassword = !this.hidePassword;
  }

  noNumbersOrSpecialCharsValidator(): any {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const forbidden = /[0-9!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(control.value);
      return forbidden ? { 'noNumbersOrSpecialChars': { value: control.value } } : null;
    };
  }

  
  login() {
    this.userService.setLoggedInUsername(this.userName);
  }

  submitForm() {
    if (this.loginForm.valid) { 
      const { selectedUser, username, password } = this.loginForm.value;

      this.service.getUser().subscribe((users: User[]) => {
        const matchedUser = users.find(user =>
          user.usertype === selectedUser && user.name === username.trim() && user.password === password
        );

        if (matchedUser) {
          this.userService.setLoggedInUsername(matchedUser.name);
          switch (matchedUser.usertype) {
            case 'admin':
              this.router.navigate(['/admin']);

              break;
            case 'employee':
              this.router.navigate(['/user']);
              break;
            case 'manager':
              this.router.navigate(['/manager']);
              break;
            default:
              console.log('Unknown user type:', matchedUser.usertype);
              break;

          }
        } else {
          
          this.toast.error({ detail: "ERROR", summary: 'User not found !', duration: 5000 });
        }
      });
    } else {
      console.log('Form validation failed');
    }
  }



}
