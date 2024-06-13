import { Component } from '@angular/core';
import { LatesubService } from '../../../service/latesub.service';
import { SessionhandlingService } from '../../../service/sessionhandling.service';
import { SubmissionService } from '../../../service/submission.service';

@Component({
  selector: 'app-managersubmission',
  templateUrl: './managersubmission.component.html',
  styleUrl: './managersubmission.component.scss'
})
export class ManagersubmissionComponent {
  submission!: any[];
  latesub!:any[];
  loggedInUsername!: string;
 
  constructor(private api: SubmissionService, private service:LatesubService,private userservice:SessionhandlingService) {}
  
  ngOnInit(): void {
    this.api.getEmployee().subscribe(res=>{    
      this.submission=res;
    

      this.service.getEmployee().subscribe(res=>{    
        this.latesub=res;
       
        this.loggedInUsername = this.userservice.getLoggedInUsername() || '';
    
      })
    })
  }
  
}