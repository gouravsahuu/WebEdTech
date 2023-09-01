from django.shortcuts import render
from rest_framework import generics
from .models import Department, Enrollment, Course, Instructor, Student, Assignment, Submission, Announcement
from .serializers import (
    DepartmentSerializer, EnrollmentSerializer, CourseSerializer,
    InstructorSerializer, StudentSerializer, AssignmentSerializer,
    SubmissionSerializer, AnnouncementSerializer
)
from django.http import JsonResponse
from .models import Instructor
from .forms import InstructorRegistrationForm 
from rest_framework.authtoken.models import Token

class InstructorListCreateView(generics.ListCreateAPIView):
    queryset = Instructor.objects.all()
    serializer_class = InstructorSerializer

class InstructorRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Instructor.objects.all()
    serializer_class = InstructorSerializer

def instructor_register(request):
    if request.method == 'POST':
        form = InstructorRegistrationForm(request.POST)
        if form.is_valid():
            # Check if the email is unique
            email = form.cleaned_data['email']
            if Instructor.objects.filter(email=email).exists():
                return JsonResponse({'error': 'Email is already registered.'})
            
            # Save the new user
            instructor = form.save()
            return JsonResponse({'message': 'Register Success'})
        else:
            return JsonResponse({'error': 'Invalid data submitted.'})

    return JsonResponse({'error': 'Invalid request method.'})

def instructor_login(request):
    if request.method == 'POST':
        email = request.POST.get('email')
        password = request.POST.get('password')

        try:
            instructor = Instructor.objects.get(email=email)
        except Instructor.DoesNotExist:
            return JsonResponse({'error': 'User not found.'})

        if instructor.check_password(password):
            token, created = Token.objects.get_or_create(user=instructor)
            return JsonResponse({'message': 'Login Success', 'token': token.key})
        else:
            return JsonResponse({'error': 'Invalid password.'})

    return JsonResponse({'error': 'Invalid request method.'})