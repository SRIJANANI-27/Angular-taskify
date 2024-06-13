import { Component } from '@angular/core';

@Component({
  selector: 'app-ttable',
  templateUrl: './ttable.component.html',
  styleUrl: './ttable.component.scss'
})
export class TtableComponent {
  tasks = [
    {
      name: 'Tutorial page',
      assignedBy: 'sheeba',
      priority: 'high',
      dueDate: '20 oct 2023',
      status: 'completed',
      description: 'sample task',
    },
    {
      name: 'Documentation',
      assignedBy: 'john_doe',
      priority: 'medium',
      dueDate: '25 Oct 2023',
      status: 'pending',
      description: 'update project',
    },
    {
      name: 'Bug Fixing',
      assignedBy: 'Ramesh',
      priority: 'urgent',
      dueDate: '15 Oct 2023',
      status: 'in progress',
      description: 'Fix critical bugs',
    },
    
    // Add more tasks as needed
  ];
}
