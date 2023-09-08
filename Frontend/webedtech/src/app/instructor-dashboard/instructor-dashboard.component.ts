import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-instructor-dashboard',
  templateUrl: './instructor-dashboard.component.html',
  styleUrls: ['./instructor-dashboard.component.css']
})
export class InstructorDashboardComponent implements OnInit {
  instructorName = localStorage.getItem("instructor_name");
  instructorId = localStorage.getItem("instructor_id");
  instructorCourse = localStorage.getItem("instructor_course");
  assignments: any[] = [];

  constructor(private http: HttpClient, private router : Router) {}

  ngOnInit(): void {
    this.http.get<any[]>('http://localhost:8000/api/assignments/')
      .subscribe((response) => {
        for(let i=0;i<response.length;i++){
          if (response[i].course == this.instructorCourse){
            this.assignments.push(response[i]);
          }
        }
      });

    this.http.get<any>(`http://localhost:8000/api/instructors/${this.instructorId}/`)
      .subscribe((response) => {
        localStorage.setItem("instructor_name",response.name);
        this.instructorName = localStorage.getItem("instructor_name");
      });
  }

  homeClick() {
    this.router.navigate(['/']);
  }

  clearCredentials() {
    localStorage.clear();
    this.router.navigate(['/']);
  }

  editAssignment(id:any){
    localStorage.setItem("assignment_id",id);
    this.router.navigate(['/edit-assignment']);
  }

  editProfile(id:any){
    localStorage.setItem("instructor_id",id);
    this.router.navigate(['/edit-instructor-profile']);
  }
}
