import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css']
})
export class StudentDashboardComponent implements OnInit {
  studentName = localStorage.getItem("student_name");
  studentId = localStorage.getItem("student_id");
  studentCourse = localStorage.getItem("student_course");
  assignments: any[] = [];

  constructor(private http: HttpClient, private router : Router) {}

  ngOnInit(): void {
    // Fetch student assignments with status and difficulty level
    this.http.get<any[]>('http://localhost:8000/api/assignments')
      .subscribe((response) => {
        for(let i=0;i<response.length;i++){
          if (response[i].course == this.studentCourse){
            this.assignments.push(response[i]);
          }
        }
      });

    this.http.get<any>(`http://localhost:8000/api/students/${this.studentId}/`)
      .subscribe((response) => {
        localStorage.setItem("student_name",response.name);
        this.studentName = localStorage.getItem("student_name");
      });
  }

  homeClick() {
    localStorage.clear();
    this.router.navigate(['/']);
  }

  onSubmit(id:any) {
    localStorage.setItem("assignment_id",id);
    this.router.navigate(['/assignment-submission']);
  }

  editProfile(id:any){
    localStorage.setItem("student_id",id);
    this.router.navigate(['/edit-student-profile']);
  }
}
