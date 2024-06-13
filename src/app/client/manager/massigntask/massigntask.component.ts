import { Component ,Input, OnInit} from '@angular/core';
import { SessionhandlingService } from '../../../service/sessionhandling.service';




@Component({
  selector: 'app-massigntask',
  templateUrl: './massigntask.component.html',
  styleUrl: './massigntask.component.scss'
})
export class MassigntaskComponent {
  date!:Date;
  loggedInUsername!: string;
 
  constructor(private userService: SessionhandlingService) { }

  ngOnInit(): void {
    this.loggedInUsername = this.userService.getLoggedInUsername() || '';
   
  }


 
  }
 

