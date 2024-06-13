import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AddusersService {

  constructor(private http:HttpClient) { }

  postUser(data:any):Observable<any>{
    return this.http.post<any>("http://localhost:3000/Users", data);
  }

  getUser():Observable<any>{
    return this.http.get<any>("http://localhost:3000/Users");
  }

  updateUser(data:any,id: number):Observable<any>{
    return this.http.put<any>("http://localhost:3000/Users/" + id, data);
  }

  deleteUser(id: number):Observable<any>{
    return this.http.delete<any>("http://localhost:3000/Users/"+ id);
  }
}
