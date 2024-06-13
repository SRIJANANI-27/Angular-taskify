import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  // readonly url="http://localhost:3000/"
  // constructor(private http : HttpClient) { }

  // private apiUrl = "http://localhost:3000/addUser";

  // getUser(){
  //   return this.http.get<any>(this.apiUrl);
  // }










  private formData = new BehaviorSubject<any>(null);
  currentFormData = this.formData.asObservable();

  updateFormData(data: any) {
    this.formData.next(data);
  
  }



  
}
