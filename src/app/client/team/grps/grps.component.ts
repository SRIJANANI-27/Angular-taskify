import Swal from 'sweetalert2';
import { Component} from '@angular/core';
import { CollaborationService } from '../../../service/collaboration.service';
import { SessionhandlingService } from '../../../service/sessionhandling.service';

@Component({
  selector: 'app-grps',
  templateUrl: './grps.component.html',
  styleUrl: './grps.component.scss'
})
export class GrpsComponent {
  
  collaboratedData = [
    { id: 1, task: 'Complete Project X', project: 'Project A', progress: '70%', assignee: 'karthik', collaborated: false },
    { id: 2, name: 'Jane Smith', task: 'Review Documentation', project: 'Project B', progress: '50%', assignee: 'Alice', collaborated: false },
    // Add more rows as needed
  ];

  collaborateClicked(row: any) {
    row.collaborated = !row.collaborated; // Toggle the collaboration status
  }
  loggedInUsername!: string;
  // collaboratedData: any[] = [];

  constructor(private userService: SessionhandlingService,private collaborationService:CollaborationService) { }

  ngOnInit(): void {
    this.loggedInUsername = this.userService.getLoggedInUsername() || '';
    this.collaborationService.collaboratedData$.subscribe(data => {
      this.collaboratedData = data;
    });
  }

  deleteRow(index: number) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      width: 250,
    }).then((result) => {
      if (result.isConfirmed) {
        this.collaboratedData.splice(index, 1);
        Swal.fire({
          title: "<span style='font-size: 20px;'>Deleted!</span>",
          text: "Not collaborated",
          icon: "success",
         width:200,
         heightAuto:false, // Disable automatic height adjustment
      });
      }
    });
  }
}
