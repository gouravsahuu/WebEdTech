import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private http: HttpClient, private router: Router) {}

  register(form: any) {
    const role = form.role;
    const name = form.name;
    const email = form.email;
    const gender = form.gender;
    const password = form.password;
    const contactNumber = form.contact_number;
    const profilePicture = form.profile_picture;
    const course = form.course;

    // Create a data object with registration information
    const registrationData = {
      name,
      email,
      gender,
      password,
      contact_number: contactNumber,
      profile_picture: profilePicture,
      course
    };

    // Define the registration API URL based on the role
    const registrationUrl = role === 'student' ? 'http://localhost:4500/api/student/register' : 'http://localhost:4500/api/instructor/register';

    // Send a POST request to the server for registration
    this.http.post(registrationUrl, registrationData)
      .subscribe(
        (response: any) => {
          console.log('Registration success:', response);
          alert('Registration success.');
        },
        (error: any) => {
          console.error('Registration error:', error);
          alert('Registration failed. Please try again.');
        }
      );
  }
}
