import { Component,  OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { StudentService } from 'src/services/student-service.service';

 
@Component({
  selector: 'app-edit-student',
  templateUrl: './edit-student.component.html',
  styleUrls: ['./edit-student.component.css']
})
export class EditStudentComponent implements OnInit {
  students: any = {};
 
  constructor(private route:ActivatedRoute, private router: Router, private studentService :StudentService) {}
 
 ngOnInit() {
    
    this.route.params.subscribe(params=>{
      const id=+params['id'];
      if(!isNaN(id)){
        this.getStudent(id);
      }
      else{
        console.error('Invalid ID');
      }
    });
  }
  getStudent(id:number){
    this.studentService.getStudentById(id).subscribe(data=>{
      this.students=data;
    });
  }
 
  onSubmit() {
    if(this.students.id){
      this.studentService.updateStudent(this.students).subscribe(() => {
        alert("Student Updated Successfully");
        this.getStudent(this.students.id);
        this.router.navigate(['/']);
      });
    } else {
      console.error('Student ID is missing');
    }
  }
}
