import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  role: string = 'student'; // Default role selection
  name: string = '';
  email: string = '';
  gender: string = ''; // Default gender selection
  password: string = '';
  contactNumber: string = '';
  profilePicture: string = '';
  course: string = ''; // Default course selection

  constructor(private http: HttpClient, private router: Router) {}

  register() {
    // Create a data object with registration information
    const registrationData = {
      role: this.role,
      name: this.name,
      email: this.email,
      gender: this.gender,
      password: this.password,
      contact_number: this.contactNumber,
      profile_picture: this.profilePicture,
      course: this.course
    };

    // Define the registration API URL based on the role
    const registrationUrl =
      this.role === 'student'
        ? 'http://localhost:8000/api/students/'
        : 'http://localhost:8000/api/instructors/';

    // Send a POST request to the server for registration
    this.http.post(registrationUrl, registrationData).subscribe(
      (response: any) => {
        console.log('Registration success:', response);
        alert('Registration success.');
        // Redirect to the login page after successful registration
        this.router.navigate(['/login']);
      },
      (error: any) => {
        console.error('Registration error:', error);
        alert('Registration failed. Please try again.');
      }
    );
  }

  homeClick() {
    this.router.navigate(['/']);
  }
}
