import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LatesubService {

  constructor(private http: HttpClient) { }

  postEmployee(data: any): Observable<any> {
    return this.http.post<any>("http://localhost:3000/latesub/", data);
  }

  getEmployee(): Observable<any[]> {
    return this.http.get<any[]>("http://localhost:3000/latesub/");
  }
}
