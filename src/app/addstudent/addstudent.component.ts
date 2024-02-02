import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from 'src/services/student-service.service';
 
@Component({
  selector: 'app-add-student',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddStudentComponent {
  student: any = {};
 
  constructor(private studentService: StudentService, private router: Router) {}
 
  onSubmit() {
    this.studentService.addStudent(this.student).subscribe(() => {
      alert("Student Added Successfully");
      this.router.navigate(['/']);
    });
  }
}