from django.db import models
from instructors.models import Instructor

class Course(models.Model):
    title = models.CharField(max_length=100)
    department = models.CharField(max_length=100)
    instructor = models.ForeignKey(Instructor, on_delete=models.CASCADE)
    duration = models.CharField(max_length=100)
    topics = models.CharField(max_length=200)

