import { Component } from '@angular/core';
import { SessionhandlingService } from '../../../service/sessionhandling.service';


@Component({
  selector: 'app-grptask',
  templateUrl: './grptask.component.html',
  styleUrl: './grptask.component.scss'
})
export class GrptaskComponent {
  userTasks = [
    {
      name: 'Ramyashri',
      id: 611220,
      email: 'abc@gmail.com',
      taskName: 'task management',
      progress: '80%',
      status: 'pending',
      taskAssignedBy: 'Sheeba',
      startDate: '23-02-2023',
      expectedEndDate: '-',
      endDate: '27-02-2023',
    },
    {
      name: 'Kumar',
      id: 611221,
      email: 'sfgc@gmail.com',
      taskName: 'issue tracking',
      progress: '60%',
      status: 'pending',
      taskAssignedBy: 'Sheeba',
      startDate: '09-07-2023',
      expectedEndDate: '20-07-2023',
      endDate: '-',
    },
    {
      name: 'Monisha',
      id: 611223,
      email: 'tja@gmail.com',
      taskName: 'leave management',
      progress: '100%',
      status: 'completed',
      taskAssignedBy: 'Sheeba',
      startDate: '10-11-2023',
      expectedEndDate: '20-11-2023',
      endDate: '20-11-2023',
    },
    {
      name: 'Divyashri',
      id: 611227,
      email: 'abc@gmail.com',
      taskName: 'tutorial',
      progress: '80%',
      status: 'pending',
      taskAssignedBy: 'Sheeba',
      startDate: '20-12-2023',
      expectedEndDate: '28-12-2023',
      endDate: '-',
    },
    {
      name: 'Monisha',
      id: 611223,
      email: 'tja@gmail.com',
      taskName: 'leave management',
      progress: '100%',
      status: 'completed',
      taskAssignedBy: 'Sheeba',
      startDate: '04-01-2023',
      expectedEndDate: '16-01-2023',
      endDate: '17-04-2023',
    },
    {
      name: 'Kumar',
      id: 611221,
      email: 'sfgc@gmail.com',
      taskName: 'issue tracking',
      progress: '60%',
      status: 'pending',
      taskAssignedBy: 'Sheeba',
      startDate: '09-07-2023',
      expectedEndDate: '20-12-2023',
      endDate: '-',
    },
  ];
  searchTerm: string = '';

  get filteredUserTasks() {
    return this.userTasks.filter(
      (userTask) =>
        userTask.name.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        userTask.taskName.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        userTask.taskAssignedBy.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
        userTask.status.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
  loggedInUsername!: string;
 
  constructor(private userService: SessionhandlingService) { }

  ngOnInit(): void {
    this.loggedInUsername = this.userService.getLoggedInUsername() || '';
   
  }

}
