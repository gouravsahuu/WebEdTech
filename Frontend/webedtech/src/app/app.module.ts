import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { InstructorDashboardComponent } from './instructor-dashboard/instructor-dashboard.component';
import { CreateAssignmentComponent } from './create-assignment/create-assignment.component';
import { FormsModule } from '@angular/forms';
import { AssignmentSubmissionComponent } from './assignment-submission/assignment-submission.component';
import { EditAssignmentComponent } from './edit-assignment/edit-assignment.component';
import { EditInstructorProfileComponent } from './edit-instructor-profile/edit-instructor-profile.component';
import { EditStudentProfileComponent } from './edit-student-profile/edit-student-profile.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LoginComponent,
    RegisterComponent,
    StudentDashboardComponent,
    InstructorDashboardComponent,
    CreateAssignmentComponent,
    AssignmentSubmissionComponent,
    EditAssignmentComponent,
    EditInstructorProfileComponent,
    EditStudentProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([]),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
