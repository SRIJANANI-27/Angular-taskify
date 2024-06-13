import { Component } from '@angular/core';
import { SessionhandlingService } from '../../../service/sessionhandling.service';

@Component({
  selector: 'app-mreport',
  templateUrl: './mreport.component.html',
  styleUrl: './mreport.component.scss'
})
export class MreportComponent {
  cards=[
    {count:'10',title:'GROUP REPORT',scount:'50',members:'members',team:'team',name:'team name',tasks:'tasks',link: '../grpreport'},
    {count:'10',title:'INDIVIDUAL REPORT',scount:'50',members:'members',team:'team',name:'team name',tasks:'tasks',link: '../indireport'},
    {count:'10',title:'TASK BASED REPORT',scount:'50',members:'members',team:'team',name:'team name',tasks:'tasks',link: '../taskreport'},

  ]
  loggedInUsername!: string;
 
  constructor(private userService: SessionhandlingService) { }

  ngOnInit(): void {
    this.loggedInUsername = this.userService.getLoggedInUsername() || '';
   
  }

}
