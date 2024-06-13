import { Component } from '@angular/core';
import { SessionhandlingService } from '../../../service/sessionhandling.service';


@Component({
  selector: 'app-tproject',
  templateUrl: './tproject.component.html',
  styleUrl: './tproject.component.scss'
})
export class TprojectComponent {
  loggedInUsername!: string;
 
  constructor(private userService: SessionhandlingService) { }

  ngOnInit(): void {
    this.loggedInUsername = this.userService.getLoggedInUsername() || '';
   
  }

}
