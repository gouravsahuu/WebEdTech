import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-assignment',
  templateUrl: './edit-assignment.component.html',
  styleUrls: ['./edit-assignment.component.css']
})
export class EditAssignmentComponent implements OnInit {
  assignment: any = {}; // Initialize an empty assignment object
  assignmentId: any;

  constructor(private http: HttpClient, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    // Get the assignment ID from the route parameters
    const assign_id = localStorage.getItem('assignment_id');

    // Fetch assignment details based on the assignment ID
    this.http.get(`http://localhost:8000/api/assignments/${assign_id}/`)
      .subscribe((response: any) => {
        this.assignment = response;
      });
  }

  updateAssignment() {
    const assign_id = localStorage.getItem('assignment_id');
    // Send a PATCH request to update assignment details
    this.http.patch(`http://localhost:8000/api/assignments/${assign_id}/`, this.assignment)
      .subscribe(
        (response: any) => {
          console.log('Assignment updated successfully:', response);
          alert('Assignment updated successfully.');
          this.router.navigate(['/instructorDashboard']); // Redirect to the instructor dashboard
        },
        (error: any) => {
          console.error('Assignment update error:', error);
          alert('Assignment update failed. Please try again.');
        }
      );
  }
  homeClick() {
    localStorage.clear();
    this.router.navigate(['/']);
  }
}

