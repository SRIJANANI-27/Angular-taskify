import { Component } from '@angular/core';
import { SessionhandlingService } from '../../../service/sessionhandling.service';

@Component({
  selector: 'app-asecurity',
  templateUrl: './asecurity.component.html',
  styleUrl: './asecurity.component.scss'
})
export class AsecurityComponent {
  loggedInUsername!: string;

  constructor(private userService: SessionhandlingService) { }

  ngOnInit(): void {
    this.loggedInUsername = this.userService.getLoggedInUsername() || '';
  }
}
