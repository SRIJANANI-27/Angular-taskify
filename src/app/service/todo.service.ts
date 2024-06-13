import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { usermodel } from '../user/usermodel';
@Injectable({
  providedIn: 'root'
})
export class TodoService {

  serviceURL : string ;

  constructor(private http : HttpClient) {
    this.serviceURL = "http://localhost:3000/tasks"
  }

  addTask(task : any) : Observable<any> {
    return this.http.post<any>(this.serviceURL,task);
  }

  getAllTask() : Observable<any[]> {
    return this.http.get<any[]>(this.serviceURL);
  }

  deleteTask(task : any) : Observable<any> {
    return this.http.delete<any>("http://localhost:3000/tasks/"+task.id);
  }
 
  editTask(task : any) : Observable<any> {
    return this.http.put<any>(this.serviceURL+'/'+task.id,task);
  }

}
