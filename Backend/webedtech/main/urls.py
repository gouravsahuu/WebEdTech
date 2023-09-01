from django.urls import path
from . import views

urlpatterns = [
    path('/instructor/', views.InstructorListCreateView.as_view(), name='instructor-list'),
    path('/instructor/<int:pk>/', views.InstructorRetrieveUpdateDestroyView.as_view(), name='instructor-detail'),
    path('/instructor/register', views.instructor_register, name='instructor_register'),
    path('/instructor/login', views.instructor_login, name='instructor_login'),
]
