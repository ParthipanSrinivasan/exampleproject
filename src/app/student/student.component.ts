import { Component, OnInit } from '@angular/core';
import { StudentServiceService } from './student-service.service';
import { MatDialog } from '@angular/material/dialog';
import { FormsDetailsComponent } from '../forms-details/forms-details.component';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrl: './student.component.scss'
})
export class StudentComponent implements OnInit{
constructor(private studentService:StudentServiceService,public dialog: MatDialog){
  this.studentService
}
student_details:any;
ngOnInit(): void {
  this.studentValue();
}
studentValue(){
  this.studentService.studentlist().subscribe((ele:any)=>{
   this.student_details=ele;
   console.log(this.student_details);
  });
}
openDialog(value:any){
  const dialogRef = this.dialog.open(FormsDetailsComponent, {
    data: {value},height: '70%',
    width: '50%'
  });
  dialogRef.afterClosed().subscribe((result:any) => {
    let val1=result
    const element=this.student_details.find((val:any)=>val.id==val1.id);
    if(element){
      element["name"]=val1.name;
      element["username"]=val1.username;
      element["email"]=val1.email;
      element["phone"]=val1.phone;
      element["website"]=val1.website;
    }
  });
}
}
