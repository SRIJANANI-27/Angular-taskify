import { Component } from '@angular/core';
import { SessionhandlingService } from '../../../service/sessionhandling.service';


@Component({
  selector: 'app-todocard',
  templateUrl: './todocard.component.html',
  styleUrl: './todocard.component.scss'
})
export class TodocardComponent {
  tasks = [
    {
      title: 'Task 1: Frontend',
      imagePath: '../../../../assets/images/task1.jpg',
      date: '23/03/24',
      priority: 'High',
      assignee: 'John'
    },
    {
      title: 'Task 2: Backend',
      imagePath: '../../../../assets/images/task2.png',
      date: '23/03/24',
      priority: 'High',
      assignee: 'John'
    },
    {
      title: 'Task 3: Frontend',
      imagePath: '../../../../assets/images/task4',
      date: '23/03/24',
      priority: 'Low',
      assignee: 'John'
    },
    // Add more tasks as needed
  ];
  loggedInUsername!: string;
 
  constructor(private userService: SessionhandlingService) { }

  ngOnInit(): void {
    this.loggedInUsername = this.userService.getLoggedInUsername() || '';
   
  }

}
