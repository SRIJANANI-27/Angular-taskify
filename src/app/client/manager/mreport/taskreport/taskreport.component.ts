import { Component } from '@angular/core';
import { SessionhandlingService } from '../../../../service/sessionhandling.service';

@Component({
  selector: 'app-taskreport',
  templateUrl: './taskreport.component.html',
  styleUrl: './taskreport.component.scss'
})
export class TaskreportComponent {
  loggedInUsername!: string;
 
  constructor(private userService: SessionhandlingService) { }

  ngOnInit(): void {
    this.loggedInUsername = this.userService.getLoggedInUsername() || '';
   
  }

}
