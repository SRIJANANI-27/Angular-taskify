import { Component } from '@angular/core';
import { SessionhandlingService } from '../../../service/sessionhandling.service';

@Component({
  selector: 'app-stikies',
  templateUrl: './stikies.component.html',
  styleUrl: './stikies.component.scss'
})
export class StikiesComponent {
  
  notes: any[] = [
    { id: 'note1', content: 'Add text here ..! 🖋️📝' },
    { id: 'note2', content: 'Every accomplishment starts with the decision to try. Important reminder: Get it done ✅' },
    { id: 'note3', content: 'The harder you work for something, the greater you\'ll feel when you achieve it 💖' },
    // ... other notes
  ];

  deleteNote(noteId: string) {
    const index = this.notes.findIndex(note => note.id === noteId);
    if (index !== -1) {
      this.notes.splice(index, 1);
    }
  }

  changesColor(noteId: string) {
    const div = document.getElementById(noteId);
    const colors = ['bg-primary', 'bg-secondary', 'bg-success', 'bg-danger', 'bg-warning', 'bg-info', 'white', 'lightpink', 'lightblue', 'lightgreen'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    if (div) {
      div.classList.remove(...colors);
      div.classList.add(randomColor);
    }
  }
  
  
  addNote() {
    const newNote = {
      id: `note-${this.notes.length + 1}`,
      content: 'New note content',
    };
    this.notes.push(newNote);
  }
  loggedInUsername!: string;
 
  constructor(private userService: SessionhandlingService) { }

  ngOnInit(): void {
    this.loggedInUsername = this.userService.getLoggedInUsername() || '';
   
  }

  }



  


