from django import forms
from .models import Instructor

class InstructorRegistrationForm(forms.ModelForm):
    class Meta:
        model = Instructor
        fields = ['name', 'email', 'gender', 'password', 'contact_number', 'profile_picture']

    def clean(self):
        cleaned_data = super().clean()
