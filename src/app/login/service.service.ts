import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  constructor() { }
  logindetails:any=[{id:"123",phone:"9788586295",otp:"1234"},
  {id:"124",phone:"9788586296",otp:"1235"},
  {id:"125",phone:"9788586297",otp:"1236"},
  {id:"126",phone:"9788586298",otp:"1237"},
  {id:"127",phone:"9788586299",otp:"1238"},]
  loginCheck(value:any){
    var obser=new Observable((val:any)=>{
      const fin=this.logindetails.find((item:any)=>item.phone === value.phone && item?.otp===value.pass)
      if(fin?.phone==value.phone && fin?.otp==value.pass){
        val.next(fin.id);
        val.complete();
      }
      else{
        val.error({error:'no phone number'});
        val.complete();
      }
    })
    return obser
  }
  inLogin(){
    return !!localStorage.getItem('myKey');
  }
}
