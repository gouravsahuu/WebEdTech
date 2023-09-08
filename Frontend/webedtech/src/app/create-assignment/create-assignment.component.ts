import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-assignment',
  templateUrl: './create-assignment.component.html',
  styleUrls: ['./create-assignment.component.css']
})
export class CreateAssignmentComponent {
  assignment = {
    title: '',
    description: '',
    deadline: '',
    category: '',
    difficulty: '',
    status: 'pending', // Initialize to 'pending'
    course : localStorage.getItem("instructor_course")
  };

  constructor(private http: HttpClient, private router: Router) {}

  createAssignment() {
    // Make an API POST request to create a new assignment
    this.http.post('http://localhost:8000/api/assignments/', this.assignment)
      .subscribe(
        (response: any) => {
          console.log('Assignment creation success:', response);
          alert('Assignment created successfully.');
          // Redirect to the instructor dashboard
          this.router.navigate(['/instructorDashboard']);
        },
        (error: any) => {
          console.error('Assignment creation error:', error);
          alert('Assignment creation failed. Please try again.');
        }
      );
  }
  homeClick() {
    localStorage.clear();
    this.router.navigate(['/']);
  }
}
