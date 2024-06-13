import { Component } from '@angular/core';
import { SessionhandlingService } from '../../../service/sessionhandling.service';


@Component({
  selector: 'app-teammembers',
  templateUrl: './teammembers.component.html',
  styleUrl: './teammembers.component.scss'
})
export class TeammembersComponent {
  loggedInUsername!: string;
 
  constructor(private userService: SessionhandlingService) { }

  ngOnInit(): void {
    this.loggedInUsername = this.userService.getLoggedInUsername() || '';
   
  }

   
}
