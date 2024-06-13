import { Component } from '@angular/core';
import { SessionhandlingService } from '../../../service/sessionhandling.service';


@Component({
  selector: 'app-usidenav',
  templateUrl: './usidenav.component.html',
  styleUrl: './usidenav.component.scss'
})
export class UsidenavComponent {
  isSidebarOpen = false;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
  loggedInUsername!: string;
 
  constructor(private userService: SessionhandlingService) { }

  ngOnInit(): void {
    this.loggedInUsername = this.userService.getLoggedInUsername() || '';
   
  }

}
