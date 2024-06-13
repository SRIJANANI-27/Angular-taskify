import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MeetingService {

  constructor(private http:HttpClient) { }
  postUser(data:any):Observable<any>{
    return this.http.post<any>("http://localhost:3000/meetings", data);
  }

  getUser():Observable<any>{
    return this.http.get<any>("http://localhost:3000/meetings");
  }
  }

