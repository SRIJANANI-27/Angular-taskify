import { Component } from '@angular/core';
import { SessionhandlingService } from '../../../../service/sessionhandling.service';

@Component({
  selector: 'app-indireport',
  templateUrl: './indireport.component.html',
  styleUrl: './indireport.component.scss'
})
export class IndireportComponent {
  employees = [
    { name: 'Ramya', username: '@kate', currentTask: 'Develop Main Page', lastCheckIn: '14 days ago', lastActivity: '14 days ago', image: '../assets/images/per5.avif' },
    { name: 'Shri', username: '@shri', currentTask: 'Develop Main Page', lastCheckIn: '3 days ago', lastActivity: '8 days ago', image: '../assets/images/per2.avif' },
    { name: 'Nandhu', username: '@kate', currentTask: 'Develop Main Page', lastCheckIn: '14 days ago', lastActivity: '14 days ago', image: '../assets/images/per4.avif' },
    { name: 'Thiya', username: '@thiya', currentTask: 'Develop Main Page', lastCheckIn: '7 days ago', lastActivity: '10 days ago', image: '../assets/images/per3.avif' },
    // { name: 'Kowshik', username: '@kowshik', currentTask: 'Develop Main Page', lastCheckIn: '14 days ago', lastActivity: '14 days ago', image: '../assets/images/per2.avif' },
    
  ];
  shows() {
    // Implement your shows logic
  }

  mys() {
    // Implement your mys logic
  }

  deleteEmployee(employee: any): void {
    const index = this.employees.indexOf(employee);
    if (index !== -1) {
      this.employees.splice(index, 1);
    }
    alert("Are you sure want to delete 🚮 ?")
}

loggedInUsername!: string;
 
constructor(private userService: SessionhandlingService) { }

ngOnInit(): void {
  this.loggedInUsername = this.userService.getLoggedInUsername() || '';
 
}

}
