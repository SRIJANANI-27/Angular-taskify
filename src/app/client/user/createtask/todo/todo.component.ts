import { Component } from '@angular/core';
import { Task } from './task';
import { TodoService } from '../../../../service/todo.service';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent {
  taskObj: Task = new Task();
  taskArr: Task[] = [];

  addTaskValue: string = '';
  editTaskValue: string = '';

  constructor(private crudService: TodoService) { }

  ngOnInit(): void {
    this.editTaskValue = '';
    this.addTaskValue = '';
    this.taskObj = new Task();
    this.taskArr = [];
    this.getAllTask();
  }

  getAllTask() {
    this.crudService.getAllTask().subscribe(res => {
      this.taskArr = res;
    }, err => {
      console.error("Unable to get list of tasks"); // Use console.error for error logs
    });
  }

  addTask() {
    this.taskObj.task_name = this.addTaskValue;
    this.crudService.addTask(this.taskObj).subscribe(res => {
      this.ngOnInit();
      this.addTaskValue = '';
    }, err => {
      console.error(err); // Use console.error for error logs
    })
  }

  editTask() {
    this.taskObj.task_name = this.editTaskValue;
    this.crudService.editTask(this.taskObj).subscribe(res => {
      this.ngOnInit();
    }, err => {
      console.error("Failed to update task"); // Use console.error for error logs
    })
  }
  onDelete(index: number) {
    console.log(index);

    this.taskArr.splice(index, 1);
  }
  
  call(etask: any) {
    this.taskObj = etask;
    this.editTaskValue = etask.task_name;
  }

}