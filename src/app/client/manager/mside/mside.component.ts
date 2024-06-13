import { Component } from '@angular/core';

@Component({
  selector: 'app-mside',
  templateUrl: './mside.component.html',
  styleUrl: './mside.component.scss'
})
export class MsideComponent {

  isSidebarOpen = false;
  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
