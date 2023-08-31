from django.db import models
from courses.models import Course

class Assignment(models.Model):

    DIFFICULTY_LEVEL_CHOICES = [
        ('easy', 'Easy'),
        ('medium', 'Medium'),
        ('hard', 'Hard'),
    ]

    course = models.ForeignKey(Course, on_delete=models.CASCADE)
    title = models.CharField(max_length=100)
    deadline = models.DateTimeField()
    description = models.TextField()
    category = models.CharField(max_length=50)
    difficulty = models.CharField(max_length=50, choices=DIFFICULTY_LEVEL_CHOICES)

