from django.shortcuts import render
from rest_framework import generics
from .models import Department, Enrollment, Course, Instructor, Student, Assignment, Submission, Announcement
from .serializers import (
    DepartmentSerializer, EnrollmentSerializer, CourseSerializer,
    InstructorSerializer, StudentSerializer, AssignmentSerializer,
    SubmissionSerializer, AnnouncementSerializer, InstructorRegistrationSerializer, InstructorLoginSerializer
)
from django.http import JsonResponse
from .models import Instructor
from rest_framework.authtoken.models import Token
from django.views.decorators.csrf import csrf_exempt
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView

class InstructorListCreateView(generics.ListCreateAPIView):
    queryset = Instructor.objects.all()
    serializer_class = InstructorSerializer

class InstructorRetrieveUpdateDestroyView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Instructor.objects.all()
    serializer_class = InstructorSerializer

@api_view(['POST'])
def instructor_register(request):
    if request.method == 'POST':
        serializer = InstructorRegistrationSerializer(data=request.data)
        if serializer.is_valid():
            email = serializer.validated_data['email']
            # Check if an instructor with the same email already exists
            if Instructor.objects.filter(email=email).exists():
                return Response({'message': 'Email already exists.'}, status=status.HTTP_400_BAD_REQUEST)
            serializer.save()
            return Response({'message': 'Registration Success'}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class InstructorLoginView(APIView):
    def post(self, request):
        serializer = InstructorLoginSerializer(data=request.data)
        if serializer.is_valid():
            instructor = serializer.validated_data['instructor']
            # token, _ = Token.objects.get_or_create(instructor=instructor)
            return Response({'message': 'Login successful'}, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
