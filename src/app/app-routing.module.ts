import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { DasboardComponent } from './dasboard/dasboard.component';
import { StudentComponent } from './student/student.component';

const routes: Routes = [
  {path:"",component:DasboardComponent,
  canActivate:[AuthGuard],
  children:[
    {path:"student/login",component:StudentComponent}
  ]},
  {path:"login",component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
