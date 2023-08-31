from django.db import models

class Student(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=100)
    password = models.CharField(max_length=100)
    date_of_birth = models.DateTimeField()
    contact_number = models.CharField(max_length=10)
    profile_picture = models.CharField(max_length=100)

