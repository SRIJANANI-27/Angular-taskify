import { Component } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.scss'
})
export class CardsComponent {
  items = [
    { title: 'Discussion room', link: '../discussion-room', image: '../assets/images/discussion room.avif' },
    { title: 'Team members', link: '../teammembers', image: '../assets/images/teammembers.png' },
    { title: 'Schedule Meet', link: '../meeting', image: '../assets/images/comments' },
    { title: 'Group task', link: '#nav9', image: '../assets/images/table.png' }
  ];

}
