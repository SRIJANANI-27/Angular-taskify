import { Component} from '@angular/core';
import { SessionhandlingService } from '../../../../service/sessionhandling.service';
@Component({
  selector: 'app-grpreport',
  templateUrl: './grpreport.component.html',
  styleUrl: './grpreport.component.scss'
})
export class GrpreportComponent {
  loggedInUsername!: string;
 
  constructor(private userService: SessionhandlingService) { }

  ngOnInit(): void {
    this.loggedInUsername = this.userService.getLoggedInUsername() || '';
   
  }

}
