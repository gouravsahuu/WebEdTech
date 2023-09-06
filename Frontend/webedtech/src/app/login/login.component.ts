import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private http: HttpClient, private router: Router) {}

  login(form: any) {
    const role = form.role; // Retrieve the selected role
    const email = form.email;
    const password = form.password;

    // Create a data object with login information
    const loginData = {
      email,
      password
    };

    // Define the login API URL based on the role
    const loginUrl = role === 'student' ? 'http://localhost:4500/api/student/login' : 'http://localhost:4500/api/instructor/login';

    // Send a POST request to the server for login
    this.http.post(loginUrl, loginData)
      .subscribe(
        (response: any) => {
          console.log('Login success:', response);
          alert('Login success.');
          // Redirect to the appropriate dashboard based on the role
          if (role === 'student') {
            this.router.navigate(['/student-dashboard']);
          } else if (role === 'instructor') {
            this.router.navigate(['/instructor-dashboard']);
          }
        },
        (error: any) => {
          console.error('Login error:', error);
          alert('Login failed. Please check your credentials and try again.');
        }
      );
  }
}
