import { Component } from '@angular/core';

@Component({
  selector: 'app-tsidenav',
  templateUrl: './tsidenav.component.html',
  styleUrl: './tsidenav.component.scss'
})
export class TsidenavComponent {
  isSidebarOpen = false;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
