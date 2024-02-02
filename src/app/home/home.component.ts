import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from 'src/services/student-service.service';
 
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  students: any[] = [];
 
  constructor(private router: Router, private service: StudentService) {}
  ngOnInit(){
    this.service.getStudents().subscribe(
      result=>{
        if(Array.isArray(result)){
          this.students=result;
        }
        console.log(this.students);
      }
    )

  }
  
  navigateToAddStudent() {
    this.router.navigate(['/addstudent']);
  }
  updateStudent(id:number): void {
    this.router.navigate(['/edit-student',id]);
  }
  deleteStudent(id: number): void {
    this.service.deleteStudentRecord(id).subscribe(
      () => {
        alert("Student Deleted Successfully");
        this.students = this.students.filter(student => student.id !== id);
        console.log(this.students);
      },
      (error) => {
        console.error('Error:', error);
    });
  }
 
}
 