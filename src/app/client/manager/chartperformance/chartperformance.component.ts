import { Component } from '@angular/core';
import { SessionhandlingService } from '../../../service/sessionhandling.service';

@Component({
  selector: 'app-chartperformance',
  templateUrl: './chartperformance.component.html',
  styleUrl: './chartperformance.component.scss'
})
export class ChartperformanceComponent {

  rows = [
    { name: "Janani", progress: "80%", title: "Webpage" },
    {name:"shiva",progress:"70%",title:"receipe book"},
    {name:"srija",progress:"90%",title:"event planner"}
    // Add more rows as needed
  ];
  rowss = [
    { name: "ram", progress: "60%", title: "event" },
    {name:"thiya",progress:"75%",title:"html"},
    {name:"rajesh",progress:"91%",title:"event planner"}
    // Add more rows as needed
  ];

  loggedInUsername!: string;
 
  constructor(private userService: SessionhandlingService) { }

  ngOnInit(): void {
    this.loggedInUsername = this.userService.getLoggedInUsername() || '';
   
  }
  collapseExampleVisible = false;
  collapseAnotherVisible = true;
  collapseExamplesVisible = false;
  
  toggleCollapseExample() {
    this.collapseExampleVisible = !this.collapseExampleVisible;
    if (this.collapseExampleVisible && this.collapseAnotherVisible) {
      this.collapseAnotherVisible = false;
    }
    if (this.collapseExampleVisible && this.collapseExamplesVisible) {
      this.collapseExamplesVisible = false;
    }
  }
  
  toggleCollapseExamples() {
    this.collapseExamplesVisible = !this.collapseExamplesVisible;
    if (this.collapseExamplesVisible && this.collapseAnotherVisible) {
      this.collapseAnotherVisible = false;
    }
    if (this.collapseExamplesVisible && this.collapseExampleVisible) {
      this.collapseExampleVisible = false;
    }
  }
  
  toggleCollapseAnother() {
    this.collapseAnotherVisible = !this.collapseAnotherVisible;
    if (this.collapseAnotherVisible && this.collapseExampleVisible) {
      this.collapseExampleVisible = false;
    }
    if (this.collapseAnotherVisible && this.collapseExamplesVisible) {
      this.collapseExamplesVisible = false;
    }
  }
  
}
