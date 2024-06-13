import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssigningtaskService {

  constructor(private http: HttpClient) { }

  postEmployee(data: any): Observable<any> {
    return this.http.post<any>("http://localhost:3000/addUser/", data);
  }

  getEmployee(): Observable<any[]> {
    return this.http.get<any[]>("http://localhost:3000/addUser/");
  }

  updateEmployee(data: any, id: number): Observable<any> {
    return this.http.put<any>("http://localhost:3000/addUser/" + id, data);
  }

  deleteEmployee(id: number): Observable<any> {
    return this.http.delete<any>("http://localhost:3000/addUser/" + id);
  }
}
