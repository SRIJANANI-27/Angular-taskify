import { Component } from '@angular/core';
import { AddusersService } from '../../../service/addusers.service';
import { SessionhandlingService } from '../../../service/sessionhandling.service';
@Component({
  selector: 'app-adashboard',
  templateUrl: './adashboard.component.html',
  styleUrl: './adashboard.component.scss'
})
export class AdashboardComponent {
  loggedInUsername!: string;

  constructor(private userService: SessionhandlingService,private service:AddusersService) { }

 
  users: any[] = [];
  userTypesCount: { [key: string]: number } = {};

  

  ngOnInit(): void {
    this.service.getUser().subscribe(
      (users: any[]) => {
        this.users = users;
        this.calculateUserTypesCount();
      },
      error => {
        console.error('Error fetching users:', error);
      }
    );
    this.loggedInUsername = this.userService.getLoggedInUsername() || '';
  }

  calculateUserTypesCount() {
    this.users.forEach(user => {
      if (this.userTypesCount[user.usertype]) {
        this.userTypesCount[user.usertype]++;
      } else {
        this.userTypesCount[user.usertype] = 1;
      }
    });
  }
  getUserTypes(): string[] {
    return Object.keys(this.userTypesCount);
  }
  
}
