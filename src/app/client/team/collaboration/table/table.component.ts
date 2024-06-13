import { Component } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
import { CollaborationService } from '../../../../service/collaboration.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss'
})
export class TableComponent {


  tableData :{ id: number; name: string; image: string; progress: number; collaborated?: boolean; task:string;project:string;assignee:String}[] =  [
    { id: 1, name: 'Priya', image: '../assets/images/profile.jpg', progress: 70, task: 'Review Documentation',project: 'Project A',assignee: 'karthik' },
    { id: 2, name: 'Moraine', image: '../assets/images/chat3.png', progress: 90 ,task:'hello',project: 'Project B',assignee: 'Ram'},
    { id: 3, name: 'Sharon', image: '../assets/images/per2.avif', progress: 70 ,task:'hello',project: 'Project C',assignee: 'Divya'},
    { id: 4, name: 'Harina', image: '../assets/images/per3.avif', progress: 60 ,task:'hello',project: 'Project D',assignee: 'thiya'},
    { id: 5, name: 'Kumar', image: '../assets/images/chat2.png', progress: 90 ,task:'hello',project: 'Project A',assignee: 'karthik'},
  ];


  // collaborateClicked(button: HTMLButtonElement) {
  //   button.textContent = 'Collaborated';
  //   button.disabled = false;
  // }
  isToastShown: boolean = false;
  constructor(private collaborationService: CollaborationService,private toast: NgToastService) {}
  collaborateClicked(row: any) {
    row.collaborated = true;
    this.collaborationService.addCollaboratedData(row);
    this.showSuccess();
    // this.toast.error({detail:"ERROR",summary:'User not found !',duration:5000});
      
  }
  
    showSuccess() {
      this.toast.success({detail:"SUCCESS",summary:'User Collaborated',duration:5000});
      
    }
  }
