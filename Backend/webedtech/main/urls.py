from django.urls import path
from . import views

urlpatterns = [
    path('instructor/', views.InstructorListCreateView.as_view(), name='instructor-list'),
    path('instructor/<int:pk>/', views.InstructorRetrieveUpdateDestroyView.as_view(), name='instructor-detail'),
    path('instructor/register/', views.instructor_register, name='instructor_register'),
    path('instructor/login/', views.InstructorLoginView.as_view(), name='instructor_login'),
]
