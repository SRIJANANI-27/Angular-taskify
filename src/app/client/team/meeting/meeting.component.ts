import { Component } from '@angular/core';
import { MeetingService } from '../../../service/meeting.service';
import { SessionhandlingService } from '../../../service/sessionhandling.service';

@Component({
  selector: 'app-meeting',
  templateUrl: './meeting.component.html',
  styleUrl: './meeting.component.scss'
})
export class MeetingComponent  {
 

  showDetails(index: number) {
    const cardDetailsElement = document.getElementById('cardDetails' + (index + 1));
    if (cardDetailsElement) {
      cardDetailsElement.style.display = 'block';
    }
  }

  hideDetails(index: number) {
    const cardDetailsElement = document.getElementById('cardDetails' + (index + 1));
    if (cardDetailsElement) {
      cardDetailsElement.style.display = 'none';
    }
  }

  meetings!: any[];
  constructor(private api: MeetingService,private userService: SessionhandlingService) {}
  
  ngOnInit(): void {
    this.api.getUser().subscribe(res=>{    
      this.meetings=res;
      
    })
    this.loggedInUsername = this.userService.getLoggedInUsername() || '';
   
  }
   
  convertTo12HourFormat(time24: string): string {
    const [hours, minutes] = time24.split(':');
    let hour = parseInt(hours, 10);
    const meridiem = hour >= 12 ? 'PM' : 'AM';
    hour = hour % 12 || 12; // Handle midnight (00:00) and noon (12:00)
    return `${hour}:${minutes} ${meridiem}`;
  }
  
  loggedInUsername!: string;
 


  

  
}


