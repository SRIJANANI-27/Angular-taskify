import { Component } from '@angular/core';
import { AddusersService } from '../../../service/addusers.service';
import { SessionhandlingService } from '../../../service/sessionhandling.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  loggedInUsername!: string;
  
 
users!: any[];

  constructor(private userService: AddusersService, private userservice:SessionhandlingService) { }

  ngOnInit(): void {
    this.userService. getUser().subscribe(data => {
      this.users = data;
    });
    this.loggedInUsername = this.userservice.getLoggedInUsername() || '';
  }
}
