from rest_framework import generics
from .models import Student, Instructor, Assignment, Submission
from .serializers import StudentSerializer, InstructorSerializer, AssignmentSerializer, SubmissionSerializer
from rest_framework.decorators import api_view
from django.contrib.auth import authenticate, login
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
import json
from .models import Student, Instructor
from django.contrib.auth.hashers import check_password

class StudentListCreateView(generics.ListCreateAPIView):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer

class StudentDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Student.objects.all()
    serializer_class = StudentSerializer
    lookup_field = 'student_id'

class InstructorListCreateView(generics.ListCreateAPIView):
    queryset = Instructor.objects.all()
    serializer_class = InstructorSerializer

class InstructorDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Instructor.objects.all()
    serializer_class = InstructorSerializer
    lookup_field = 'instructor_id'

class AssignmentListCreateView(generics.ListCreateAPIView):
    queryset = Assignment.objects.all()
    serializer_class = AssignmentSerializer

class AssignmentDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Assignment.objects.all()
    serializer_class = AssignmentSerializer
    lookup_field = 'assignment_id'

class SubmissionCreateView(generics.CreateAPIView):
    queryset = Submission.objects.all()
    serializer_class = SubmissionSerializer

class SubmissionDetailView(generics.RetrieveAPIView):
    queryset = Submission.objects.all()
    serializer_class = SubmissionSerializer
    lookup_field = 'submission_id'

@csrf_exempt
@api_view(['POST'])
def student_login(request):
    if request.method == 'POST':
        try:
            request_data = json.loads(request.body.decode('utf-8'))
            email = request_data.get('email')  # Use 'email' field
            password = request_data.get('password')

            # Check if a student with the provided email exists
            try:
                student = Student.objects.get(email=email)
            except Student.DoesNotExist:
                student = None
                
            if student is not None and student.password == password:
                return JsonResponse({'message': 'Login Success', 'student_id': student.student_id, 'student_name': student.name, 'student_course':student.course})
            else:
                return JsonResponse({'message': 'Login Failed'}, status=401)
        except json.JSONDecodeError:
            return JsonResponse({'message': 'Invalid JSON data in request body'}, status=400)


@csrf_exempt
@api_view(['POST'])
def instructor_login(request):
    if request.method == 'POST':
        try:
            request_data = json.loads(request.body.decode('utf-8'))
            email = request_data.get('email')  # Use 'email' field
            password = request_data.get('password')

            # Check if an instructor with the provided email exists
            try:
                instructor = Instructor.objects.get(email=email)
            except Instructor.DoesNotExist:
                instructor = None

            if instructor is not None and instructor.password == password:
                return JsonResponse({'message': 'Login Success', 'instructor_id': instructor.instructor_id, 'instructor_name': instructor.name, 'instructor_course':instructor.course})
            else:
                return JsonResponse({'message': 'Login Failed'}, status=401)
        except json.JSONDecodeError:
            return JsonResponse({'message': 'Invalid JSON data in request body'}, status=400)