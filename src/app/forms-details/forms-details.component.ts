import { Component,Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { StudentComponent } from '../student/student.component';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-forms-details',
  templateUrl: './forms-details.component.html',
  styleUrl: './forms-details.component.scss'
})
export class FormsDetailsComponent implements OnInit {
   constructor(public dialogRef: MatDialogRef<FormsDetailsComponent>,
   @Inject(MAT_DIALOG_DATA) public data: StudentComponent)
    {}
    form_edit:any
    edit_value:any
    form_details:any=new FormGroup({name:new FormControl(""),
    username:new FormControl(""),email:new FormControl(""),phone:new FormControl(""),website:new FormControl(""),id:new FormControl("")
  });
    ngOnInit(): void {
      this.form_edit=this.data
      this.form_details.controls['name'].value =this.form_edit.value.name;
      this.form_details.controls['username'].value =this.form_edit.value.username;
      this.form_details.controls['email'].value =this.form_edit.value.email;
      this.form_details.controls['phone'].value =this.form_edit.value.phone;
      this.form_details.controls['website'].value =this.form_edit.value.website;
      this.form_details.controls['id'].value=this.form_edit.value.id;
    }
    onNoClick(): void {
      this.dialogRef.close();
    }
}
