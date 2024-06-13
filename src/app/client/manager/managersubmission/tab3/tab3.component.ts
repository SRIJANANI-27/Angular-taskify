import { Component } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.component.html',
  styleUrl: './tab3.component.scss'
})
export class Tab3Component {
  newComment: string = '';
  comments: string[] = [];
  postedOn: Date = new Date(); 

  // ngOnInit() {
  //   // Add static comment
  //   this.comments.push("This website is user-friendly and visually appealing 😍");
  // }
  getCurrentTime(): string {
    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12;
    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
    return formattedHours + ':' + formattedMinutes + ' ' + ampm;
  }
  
  addComment() {
    if (this.newComment.trim() !== '') {
      this.comments.push(this.newComment);
      this.newComment = ''; 
      this.postedOn = new Date();// Clear the textarea after adding the comment
    } else {
      alert('Please enter a comment before sending.');
    }
  }

  
  

}
