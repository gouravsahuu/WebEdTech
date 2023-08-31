from django.db import models

class Instructor(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField(max_length=100)
    highest_qualification = models.CharField(max_length=100)
    experience = models.CharField(max_length=20)
    password = models.CharField(max_length=100)

