import { Component } from '@angular/core';
import { SessionhandlingService } from '../../../service/sessionhandling.service';

@Component({
  selector: 'app-asettings',
  templateUrl: './asettings.component.html',
  styleUrl: './asettings.component.scss'
})
export class AsettingsComponent {
  loggedInUsername!: string;
 
  constructor(private userService: SessionhandlingService) { }

  ngOnInit(): void {
    this.loggedInUsername = this.userService.getLoggedInUsername() || '';
   
  }
  colors: string[] = ["pink", "green", "red", "blue", "grey"];
  currentIndex: number = 0;



  tap() {
    document.body.style.backgroundColor = this.colors[this.currentIndex];
    this.currentIndex = (this.currentIndex + 1) % this.colors.length; // Loop back to the beginning when reaching the end
  }
}

