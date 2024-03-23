import { Component, Injectable, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from './service.service';
import { error } from 'console';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
@Injectable()
export class LoginComponent implements OnInit {
  constructor(public loginService:ServiceService,private router:Router){
    this.loginService=this.loginService
  }
  loginName=new FormGroup({phone:new FormControl("",[Validators.required,Validators.minLength(10)]),
  pass:new FormControl('',[Validators.required,Validators.minLength(6)])
});
loginerror:any
 ngOnInit(){
 
 }
 userInput(){
  this.loginService.loginCheck(this.loginName.value).subscribe((val:any)=>{
    const token:string=val;
    
    localStorage.setItem('myKey',token);
    this.router.navigate(['/student/login']);
  },
  (error:any)=>{
    this.loginerror=error.error;
  }
  );
 }
}
