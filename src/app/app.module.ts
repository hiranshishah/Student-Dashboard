import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddStudentComponent } from './addstudent/addstudent.component';
import { EditStudentComponent } from './edit-student/edit-student.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
 
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddStudentComponent,
    EditStudentComponent,
    LoginComponent,
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  exports: [RouterModule],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }