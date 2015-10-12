from django.db import models 
import datetime

class Band(models.Models):
    name=models.CharFeild(max_length=128, null=False, unique=True, blank=False)
    date_added=models.DateFeild(default=datetime.datetime.now)
    image=models.CharFeild(max_length=255, null=False, unique=True, blank=True)
    bio=models.TextFeilds(max_length=255, null=False, unique=True, blank=True)