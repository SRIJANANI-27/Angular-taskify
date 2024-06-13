import { Component } from '@angular/core';
import { SessionhandlingService } from '../../../service/sessionhandling.service';

@Component({
  selector: 'app-asidenav',
  templateUrl: './asidenav.component.html',
  styleUrl: './asidenav.component.scss'
})
export class AsidenavComponent {
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

