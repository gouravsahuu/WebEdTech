from django.db import models
from students.models import Student
from assignments.models import Assignment

class Submission(models.Model):

    STATUS_CHOICES = [
        ('pending', 'Pending'),
        ('completed', 'Completed'),
    ]

    assignment = models.ForeignKey(Assignment, on_delete=models.CASCADE)
    student = models.ForeignKey(Student, on_delete=models.CASCADE)
    submission_url = models.TextField()
    submission_datetime = models.DateTimeField()
    status = models.CharField(max_length=50, choices=STATUS_CHOICES)

