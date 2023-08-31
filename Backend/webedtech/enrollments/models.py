from django.db import models
from students.models import Student
from courses.models import Course

class Enrollment(models.Model):

    STATUS_CHOICES = [
        ('active', 'Active'),
        ('inactive', 'Inactive'),
    ]

    student = models.ForeignKey(Student, on_delete=models.CASCADE)
    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    enrollment_date = models.DateTimeField()
    student_status = models.CharField(max_length=50, choices=STATUS_CHOICES)

