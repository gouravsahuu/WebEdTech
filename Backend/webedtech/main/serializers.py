from rest_framework import serializers
from django.contrib.auth.hashers import make_password
from django.contrib.auth.hashers import check_password
from django.contrib.auth import authenticate
from .models import Department, Enrollment, Course, Instructor, Student, Assignment, Submission, Announcement

class DepartmentSerializer(serializers.ModelSerializer):
    class Meta:
        model=Department
        fields= '__all__'

class EnrollmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Enrollment
        fields = '__all__'

class CourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Course
        fields = '__all__'

class InstructorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Instructor
        fields = '__all__'

class StudentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Student
        fields = '__all__'

class AssignmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Assignment
        fields = '__all__'

class SubmissionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Submission
        fields = '__all__'

class AnnouncementSerializer(serializers.ModelSerializer):
    class Meta:
        model = Announcement
        fields = '__all__'

class InstructorRegistrationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Instructor
        fields = '__all__'
        
    def create(self, validated_data):
        # Perform custom processing here before saving to the database
        password = validated_data.pop('password')
        # Hash the password (you can use Django's built-in password hashing)
        hashed_password = make_password(password)
        # Create a new instructor instance with the hashed password
        instructor = Instructor(**validated_data, password=hashed_password)
        instructor.save()
        return instructor
    

class InstructorLoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField(write_only=True)

    def validate(self, data):
        email = data.get('email')
        password = data.get('password')

        if email and password:
            # Check if the user exists with the provided email
            try:
                instructor = Instructor.objects.get(email=email)
            except Instructor.DoesNotExist:
                raise serializers.ValidationError("Instructor with this email does not exist.")

            # Use Django's authenticate function to verify the hashed password
            # user = authenticate(email=email, password=password)
            if instructor and check_password(password, instructor.password):
                data['instructor'] = instructor
            else:
                raise serializers.ValidationError("Invalid email or password.")
        else:
            raise serializers.ValidationError("Both email and password are required.")
        
        return data