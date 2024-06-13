import { Component } from '@angular/core';
import { SessionhandlingService } from '../../../../service/sessionhandling.service';

@Component({
  selector: 'app-individualperformnace',
  templateUrl: './individualperformnace.component.html',
  styleUrl: './individualperformnace.component.scss'
})
export class IndividualperformnaceComponent {
  listItems = [
    { name: 'Janani', subname: 'srija', image: '../assets/images/chat1.png', color: 'primary', content: 'Collapse content for Janani', isOpen: false },
    { name: 'SriJanani', subname: 'srija', image: '../assets/images/chat4.png', color: 'secondary', content: 'Collapse content for SriJanani', isOpen: false },
    // Add more items as needed
  ];

  projects = [
    { id: 1, title: 'Project Alpha', progress: 25, members: ['John', 'Alice', 'Bob'] },
    { id: 2, title: 'Project Beta', progress: 50, members: ['Emily', 'David'] },
    { id: 3, title: 'Project Gamma', progress: 75, members: ['Sarah', 'Michael'] }
  ];
  projectss = [
    { id: 1, title: 'Project A', progress: 80, members: ['John', 'Alice'] },
    { id: 2, title: 'Project B', progress: 50, members: ['Emily', 'David'] },
  ];


  collapseExampleVisible = true;
  collapseAnotherVisible = false;

  toggleCollapseExample() {
    this.collapseExampleVisible = !this.collapseExampleVisible;
    if (this.collapseExampleVisible && this.collapseAnotherVisible) {
      this.collapseAnotherVisible = false;
    }
  }

  toggleCollapseAnother() {
    this.collapseAnotherVisible = !this.collapseAnotherVisible;
    if (this.collapseAnotherVisible && this.collapseExampleVisible) {
      this.collapseExampleVisible = false;
    }
  }

  loggedInUsername!: string;
 
  constructor(private userService: SessionhandlingService) { }

  ngOnInit(): void {
    this.loggedInUsername = this.userService.getLoggedInUsername() || '';
   
  }

}
