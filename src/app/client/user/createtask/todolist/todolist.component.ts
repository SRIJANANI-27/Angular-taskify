import { Component } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.scss'
})
export class TodolistComponent {
  inputText: string = '';
  minimalValue: number = 3;
  listNum: number = 0;
  todoItems: { id: number; text: string; done: boolean }[] = [];

  addList(): void {
    const inputTextFiltered: string | false = this.filterList(this.inputText);

    if (inputTextFiltered) {
      this.todoItems.push({ id: this.listNum, text: inputTextFiltered, done: false });
      this.inputText = '';
      this.listNum++;
    }
  }

  done(listId: number): void {
    const item = this.todoItems.find(item => item.id === listId);

    if (item) {
      item.done = !item.done;
    }
  }

  filterList(x: string): string | false {
    if (x && x.length >= this.minimalValue) {
      return x;
    } else {
      alert('Please enter more than 3 words');
      return false;
    }
  }

  editList(listId: number): void {
    const item = this.todoItems.find(item => item.id === listId);

    if (item) {
      const newText: string | null = prompt('Wanna Change list?', item.text);

      if (newText !== null && this.filterList(newText)) {
        item.text = newText;
      }
    }
  }

  deleteList(listId: number): void {
    const item = this.todoItems.find(item => item.id === listId);

    if (item) {
      const deleteConfirm: boolean = confirm(`Are you sure to delete "${item.text}"?`);

      if (deleteConfirm) {
        this.todoItems = this.todoItems.filter(todo => todo.id !== listId);
      }
    }
  }
}