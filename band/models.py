from django.db import models 
import datetime

class Band(models.Model):
    name=models.CharField(max_length=128, null=False, unique=True, blank=False)
    date_added=models.DateField(default=datetime.datetime.now)
    image=models.CharField(max_length=255, null=False, unique=True, blank=True)
    bio=models.TextField(max_length=255, null=False, unique=True, blank=True)