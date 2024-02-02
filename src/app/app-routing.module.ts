import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddStudentComponent } from './addstudent/addstudent.component';
import { LoginComponent } from './login/login.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
 
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'addstudent', component: AddStudentComponent },
  { path: 'edit-student/:id', component: EditStudentComponent },
  { path: 'login', component: LoginComponent }
  // Add more routes as needed
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }