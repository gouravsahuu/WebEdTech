from django.db import models

class Department(models.Model):
    name=models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Student(models.Model):
    student_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=100)
    password = models.CharField(max_length=100)
    gender = models.CharField(max_length=10)
    contact_number = models.CharField(max_length=10)
    profile_picture = models.CharField(max_length=100)

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

    def __str__(self):
        return self.name

class Course(models.Model):
    course_id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=100)
    instructor = models.ForeignKey(Instructor, on_delete=models.CASCADE)
    duration = models.CharField(max_length=100)
    topics = models.CharField(max_length=200)

    def __str__(self):
        return self.course_name

class Enrollment(models.Model):

    enrollment_id = models.AutoField(primary_key=True)
    student = models.ForeignKey(Student, on_delete=models.CASCADE)
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    enrollment_date = models.DateTimeField()

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

    assignment_id = models.AutoField(primary_key=True)
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    title = models.CharField(max_length=100)
    deadline = models.DateTimeField()
    description = models.TextField()
    category = models.CharField(max_length=50)
    difficulty = models.CharField(max_length=50, choices=DIFFICULTY_LEVEL_CHOICES)

class Submission(models.Model):

    STATUS_CHOICES = [
        ('pending', 'Pending'),
        ('completed', 'Completed'),
    ]

    submission_id = models.AutoField(primary_key=True)
    assignment = models.ForeignKey(Assignment, on_delete=models.CASCADE)
    student = models.ForeignKey(Student, on_delete=models.CASCADE)
    submission_url = models.TextField()
    submission_datetime = models.DateTimeField()
    status = models.CharField(max_length=50, choices=STATUS_CHOICES)

class Announcement(models.Model):

    IMPORTANCE_LEVEL_CHOICES = [
        ('easy', 'Easy'),
        ('medium', 'Medium'),
        ('hard', 'Hard'),
    ]

    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    department = models.ForeignKey(Department, on_delete=models.CASCADE)
    message = models.TextField()
    date_time = models.DateTimeField()
    importance_level = models.CharField(max_length=50, choices=IMPORTANCE_LEVEL_CHOICES)

