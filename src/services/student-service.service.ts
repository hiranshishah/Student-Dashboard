import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
const apiUrl = 'https://65a8cb55219bfa3718679c06.mockapi.io/PROJ';

@Injectable({
  providedIn: 'root'
})
export class StudentService {


  constructor(private http: HttpClient) { }

  getStudents(): Observable<any[]> {
    return this.http.get<any[]>(apiUrl);
  }

  getStudentById(id: number): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http.get<any>(url);
  }

  addStudent(student: any): Observable<any> {
    return this.http.post<any>(apiUrl, student);
  }

  updateStudent(student: any): Observable<any> {
    const url = `${apiUrl}/${student.id}`;
    return this.http.put<any>(url, student);
  }

  deleteStudentRecord(id:number): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http.delete<any>(url);
  }
}
