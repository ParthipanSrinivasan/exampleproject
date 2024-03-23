import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {
  studentget:any;
  constructor(private http:HttpClient) { }
  studentlist(){
  return (this.http.get<any>(" https://jsonplaceholder.typicode.com/users"));
  }
}
