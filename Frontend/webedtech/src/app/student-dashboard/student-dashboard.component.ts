import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css']
})
export class StudentDashboardComponent implements OnInit {
  studentName = '';
  studentId = '';
  assignments: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    // Fetch student assignments with status and difficulty level
    this.http.get<any[]>('http://localhost:4500/api/student/assignments')
      .subscribe((response) => {
        this.assignments = response;
      });
  }
}
