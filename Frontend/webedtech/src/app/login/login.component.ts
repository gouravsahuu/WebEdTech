import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  role: string = 'student'; // Default role selection
  email: string = '';
  password: string = '';

  constructor(private http: HttpClient, private router: Router) {}

  login() {
    // Create a data object with login information
    const loginData = {
      email: this.email,
      password: this.password
    };

    // Define the login API URL based on the role
    const loginUrl =
      this.role === 'student'
        ? 'http://localhost:8000/api/students/login/'
        : 'http://localhost:8000/api/instructors/login/';

    // Send a POST request to the server for login
    this.http.post(loginUrl, loginData).subscribe(
      (response: any) => {
        console.log('Login success:', response);
        alert('Login success.');
        if (this.role === 'student') {
          localStorage.clear();
          localStorage.setItem("student_name",response.student_name);
          localStorage.setItem("student_id", response.student_id);
          localStorage.setItem("student_course",response.student_course);
        } else if (this.role === 'instructor') {
          localStorage.clear();
          localStorage.setItem("instructor_name",response.instructor_name);
          localStorage.setItem("instructor_id", response.instructor_id);
          localStorage.setItem("instructor_course", response.instructor_course);
        }
        // Redirect to the appropriate dashboard based on the role
        if (this.role === 'student') {
          this.router.navigate(['/studentDashboard']);
        } else if (this.role === 'instructor') {
          this.router.navigate(['/instructorDashboard']);
        }
      },
      (error: any) => {
        console.error('Login error:', error);
        alert('Login failed. Please check your credentials and try again.');
      }
    );
  }

  homeClick() {
    this.router.navigate(['/']);
  }
}