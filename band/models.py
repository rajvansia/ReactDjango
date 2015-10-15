from django.db import models 
import datetime

class Band(models.Model):
    name=models.CharField(max_length=128, null=False, unique=True, blank=False)
    date_added=models.DateField(default=datetime.datetime.now)
    image=models.CharField(max_length=255, null=False, unique=True, blank=True)
    bio=models.TextField(max_length=255, null=False, unique=True, blank=True)
    
class UserProfile(models.Model):
    username = models.CharField(max_length=254, unique=True,null=True)
    first_name = models.CharField(max_length=30, blank=True,null=True)
    last_name = models.CharField(max_length=30, blank=True,null=True)
    email = models.EmailField(blank=True,null=True)
    birthday=models.DateField(default=datetime.datetime.now)
    is_parent = models.BooleanField(default=False)
    gender= models.CharField(max_length=30, blank=True,null=True)
    
class Parent(models.Model):
    parent = models.ForeignKey(UserProfile)
    
class Child(models.Model):
    child = models.ForeignKey(UserProfile)
   
      
      
      
class Family(models.Model):
    mychild = models.ForeignKey(Child)
    myparent = models.ForeignKey(Parent)