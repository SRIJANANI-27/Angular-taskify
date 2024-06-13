import { Component,Input } from '@angular/core';
import { SessionhandlingService } from '../../../service/sessionhandling.service';

@Component({
  selector: 'app-projectt',
  templateUrl: './projectt.component.html',
  styleUrl: './projectt.component.scss'
})
export class ProjecttComponent {
  filesVisible = false;

  file() {
    this.filesVisible = true;
  }

  loggedInUsername: string | null = null;

  constructor(private userService: SessionhandlingService) { }

  ngOnInit(): void {
    this.loggedInUsername = this.userService.getLoggedInUsername();
  }
  }


