import { Component ,OnInit} from '@angular/core';
import { TaskService } from '../../../../service/task.service';


@Component({
  selector: 'app-viewsubmission',
  templateUrl: './viewsubmission.component.html',
  styleUrl: './viewsubmission.component.scss'
})
export class ViewsubmissionComponent implements OnInit {
  listData :any[]= [
    {
      title: 'tutorial',
      assignee: 'John Doe',
      description: 'Description 1',
      date: '2024-02-02',
      file: '/assets/images/pdf.png',
    },
    {
      title: 'web design',
      assignee: 'sheeba',
      description: 'Description 2',
      date: '2024-05-22',
      file: '/assets/images/pdf.png',
    },
    {
      title: 'Receipe book',
      assignee: 'Karthik',
      description: 'Description 3',
      date: '2024-09-16',
      file: '/assets/images/pdf.png',
    },
    {
      title: 'ecommerce',
      assignee: 'priya',
      description: 'Description 4',
      date: '2024-12-04',
      file: '/assets/images/pdf.png',
    },
    
    // Add more data as needed
  ];
  

  constructor(private taskService:TaskService) {}

  ngOnInit() {
    this.taskService.currentFormData.subscribe(data => {
      if (data) {
        this.listData.push(data);
      }
    });
  }

}
