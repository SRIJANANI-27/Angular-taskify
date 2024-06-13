import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  APIURL="http://localhost:3000/charts"
  constructor(private http:HttpClient) { 

  }
  showdata(){
    return this.http.get(this.APIURL);
  }
}
