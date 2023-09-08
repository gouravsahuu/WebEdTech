import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-student-profile',
  templateUrl: './edit-student-profile.component.html',
  styleUrls: ['./edit-student-profile.component.css']
})
export class EditStudentProfileComponent implements OnInit {
  student: any = {}; // Initialize with an empty object

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    // Get student details from API based on the student_id in local storage
    const studentId = localStorage.getItem('student_id');
    this.http.get<any>(`http://localhost:8000/api/students/${studentId}/`)
      .subscribe((response) => {
        this.student = response;
      });
  }

  updateProfile() {
    // Send a PATCH request to update student details
    const studentId = localStorage.getItem('student_id');
    this.http.patch(`http://localhost:8000/api/students/${studentId}/`, this.student)
      .subscribe(
        (response: any) => {
          console.log('Profile updated successfully:', response);
          alert('Profile updated successfully.');
          this.router.navigate(['/studentDashboard']); // Redirect to student dashboard after updating
        },
        (error: any) => {
          console.error('Profile update error:', error);
          alert('Profile update failed. Please try again.');
        }
      );
  }

  homeClick() {
    localStorage.clear();
    this.router.navigate(['/']);
  }
}
