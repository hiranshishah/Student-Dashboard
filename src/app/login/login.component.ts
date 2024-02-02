import { Component } from '@angular/core';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username='';
  password='';
 
  constructor(private router: Router) {}
 
  login() {
    // Implement authentication logic here
    if (this.username === 'admin' && this.password === 'admin') {
      this.router.navigate(['/']);
    } else {
      alert('Invalid username or password');
    }
  }
  
}