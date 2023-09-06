from django.urls import path
from . import views

urlpatterns = [
    path('students/', views.StudentListCreateView.as_view(), name='student-list'),
    path('students/<int:student_id>/', views.StudentDetailView.as_view(), name='student-detail'),
    path('instructors/', views.InstructorListCreateView.as_view(), name='instructor-list'),
    path('instructors/<int:instructor_id>/', views.InstructorDetailView.as_view(), name='instructor-detail'),
    path('assignments/', views.AssignmentListCreateView.as_view(), name='assignment-list'),
    path('assignments/<int:assignment_id>/', views.AssignmentDetailView.as_view(), name='assignment-detail'),
    path('assignments/<int:assignment_id>/submissions/', views.SubmissionCreateView.as_view(), name='submission-create'),
    path('submissions/<int:submission_id>/', views.SubmissionDetailView.as_view(), name='submission-detail'),
]
