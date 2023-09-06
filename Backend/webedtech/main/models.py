from django.db import models

class Student(models.Model):
    student_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=100)
    password = models.CharField(max_length=100)
    gender = models.CharField(max_length=10)
    contact_number = models.CharField(max_length=10)
    profile_picture = models.CharField(max_length=100)
    course = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Instructor(models.Model):
    instructor_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=100)
    gender = models.CharField(max_length=10)
    password = models.CharField(max_length=100)
    contact_number = models.CharField(max_length=10)
    profile_picture = models.CharField(max_length=100)
    course = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Assignment(models.Model):
    DIFFICULTY_LEVEL_CHOICES = [
        ('easy', 'Easy'),
        ('medium', 'Medium'),
        ('hard', 'Hard'),
    ]

    CATEGORY_CHOICES = [
        ('dsa', 'DSA'),
        ('coding', 'Coding')
    ]

    STATUS_CHOICES = [
        ('pending', 'Pending'),
        ('completed', 'Completed'),
    ]

    assignment_id = models.AutoField(primary_key=True)
    course = models.CharField(max_length=100)
    title = models.CharField(max_length=100)
    deadline = models.DateTimeField()
    description = models.TextField()
    category = models.CharField(max_length=50)
    difficulty = models.CharField(max_length=50, choices=DIFFICULTY_LEVEL_CHOICES)
    status = models.CharField(max_length=50, choices=STATUS_CHOICES)

class Submission(models.Model):
    submission_id = models.AutoField(primary_key=True)
    assignment = models.ForeignKey(Assignment, on_delete=models.CASCADE)
    student = models.ForeignKey(Student, on_delete=models.CASCADE)
    submission_url = models.TextField()
    submission_datetime = models.DateTimeField()

