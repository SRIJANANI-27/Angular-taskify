import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SubmissionService {

  constructor(private http: HttpClient) { }

  postEmployee(data: any): Observable<any> {
    return this.http.post<any>("http://localhost:3000/submission/", data);
  }
  
  getEmployee(): Observable<any[]> {
    return this.http.get<any[]>("http://localhost:3000/submission/");
  }
}
