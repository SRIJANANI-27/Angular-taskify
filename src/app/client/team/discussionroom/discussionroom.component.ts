import { Component } from '@angular/core';
import { SessionhandlingService } from '../../../service/sessionhandling.service';

@Component({
  selector: 'app-discussionroom',
  templateUrl: './discussionroom.component.html',
  styleUrl: './discussionroom.component.scss'
})
export class DiscussionroomComponent {
  loggedInUsername!: string;
 
  constructor(private userService: SessionhandlingService) { }

  ngOnInit(): void {
    this.loggedInUsername = this.userService.getLoggedInUsername() || '';
   
  }

}
