import { Component, OnInit} from '@angular/core';
import { AssigningtaskService } from '../../../service/assigningtask.service';
import { SessionhandlingService } from '../../../service/sessionhandling.service';


@Component({
  selector: 'app-assigntask',
  templateUrl: './assigntask.component.html',
  styleUrl: './assigntask.component.scss'
})
export class AssigntaskComponent implements OnInit {

  submissions!: any[];
constructor(private api:AssigningtaskService,private userservice:SessionhandlingService){}
loggedInUsername!: string;

ngOnInit(): void {
  this.api.getEmployee().subscribe(res=>{    
    this.submissions=res;
    this.reloadUser();


  })
  this.loggedInUsername = this.userservice.getLoggedInUsername() || '';
   

  
}
reloadUser(){
  this.api.getEmployee().subscribe(res=>{
    this.submissions=res
  })
}
}

