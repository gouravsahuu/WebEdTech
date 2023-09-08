import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-instructor-profile',
  templateUrl: './edit-instructor-profile.component.html',
  styleUrls: ['./edit-instructor-profile.component.css']
})
export class EditInstructorProfileComponent implements OnInit {
  instructor: any = {}; // Initialize with an empty object

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    // Get instructor details from API based on the instructor_id in local storage
    const instructorId = localStorage.getItem('instructor_id');
    this.http.get<any>(`http://localhost:8000/api/instructors/${instructorId}/`)
      .subscribe((response) => {
        this.instructor = response;
      });
  }

  updateProfile() {
    // Send a PATCH request to update instructor details
    const instructorId = localStorage.getItem('instructor_id');
    this.http.patch(`http://localhost:8000/api/instructors/${instructorId}/`, this.instructor)
      .subscribe(
        (response: any) => {
          console.log('Profile updated successfully:', response);
          alert('Profile updated successfully.');
          this.router.navigate(['/instructorDashboard']); // Redirect to instructor dashboard after updating
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
