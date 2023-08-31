from django.db import models
from courses.models import Course
from departments.models import Department

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

