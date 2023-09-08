import { Component, OnInit , ElementRef, ViewChild } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-assignment-submission',
  templateUrl: './assignment-submission.component.html',
  styleUrls: ['./assignment-submission.component.css']
})
export class AssignmentSubmissionComponent {
  @ViewChild('assignmentURL') assignmentURL!: ElementRef;
  assignmentID = localStorage.getItem('assignment_id');
  assignmentDetails : any;

  constructor(private http: HttpClient, private router : Router) {}
  
  ngOnInit(): void {
    this.http.get<any[]>(`http://localhost:8000/api/assignments/${this.assignmentID}/`)
      .subscribe((response) => {
        this.assignmentDetails = response;
      });
  }

  submitAssignment() {
    // Get student ID from local storage
    const studentId = localStorage.getItem('student_id');
    const assignmentID = localStorage.getItem('assignment_id');
    const currentDate = new Date();
    const formattedDate = currentDate.toISOString();
    const assignmentUrl = this.assignmentURL.nativeElement.value;

    // Prepare the assignment submission data as an object
    const submissionData = {
      student: studentId,
      assignment : assignmentID,
      submission_url: assignmentUrl,
      submission_datetime : formattedDate
    };

    // Send a POST request to the server to submit the assignment
    this.http.post(`http://localhost:8000/api/assignments/${Number(assignmentID)}/submissions/`, submissionData)
      .subscribe(
        (response: any) => {
          console.log('Assignment submitted successfully:', response);
          alert('Assignment submitted successfully.');
          this.router.navigate(['/studentDashboard']);
        },
        (error: any) => {
          console.error('Assignment submission error:', error);
          alert('Assignment submission failed. Please try again.');
        }
      );
  }

  homeClick() {
    this.router.navigate(['/']);
  }
}
