import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { InstructorDashboardComponent } from './instructor-dashboard/instructor-dashboard.component';
import { CreateAssignmentComponent } from './create-assignment/create-assignment.component';
import { AssignmentSubmissionComponent } from './assignment-submission/assignment-submission.component';
import { EditAssignmentComponent } from './edit-assignment/edit-assignment.component';
import { EditInstructorProfileComponent } from './edit-instructor-profile/edit-instructor-profile.component';
import { EditStudentProfileComponent } from './edit-student-profile/edit-student-profile.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'studentDashboard', component: StudentDashboardComponent },
  { path: 'instructorDashboard', component: InstructorDashboardComponent },
  { path: 'create-assignment', component: CreateAssignmentComponent },
  { path: 'assignment-submission', component: AssignmentSubmissionComponent},
  { path: 'edit-assignment', component: EditAssignmentComponent },
  { path: 'edit-instructor-profile', component: EditInstructorProfileComponent },
  { path: 'edit-student-profile', component: EditStudentProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
