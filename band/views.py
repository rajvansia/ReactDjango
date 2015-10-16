from django.shortcuts import render 
from models import Band
from models import UserProfile
from rest_framework import generics, permissions
from serializers import BandSerializer
from serializers import UserSerializer
from .forms import UserForm
from django.shortcuts import redirect
#interger argument
def all_bands(request):
    return render(request,"band/all_bands.html")
# class base views a serilize that data
class BandDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset=Band.objects.all()
    serializer_class=BandSerializer
    permission_classes = (permissions.IsAuthenticated,)

def band(request, band_id,format=None):
    band=Band.objects.get(pk=band_id)
    return render(request, "band/band.html",{'band':band})
    
def all_users(request):
    return render(request,"band/all_users.html")
    
# class base views a serilize that data
class UserDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset=UserProfile.objects.all()
    serializer_class=UserSerializer

def user(request, user_id,format=None):
    user=UserProfile.objects.get(pk=user_id)
    return render(request, "band/user.html",{'user':user})
#django dictionay key value pairs

#now create the band detail view you  defined in api

def user_new(request):
    if request.method == "POST":
        form =  UserForm(request.POST)
        if form.is_valid():
            user = form.save(commit=False)
            # user.username = request.user
            # user.gender = request.gender
            user.save()
            return render(request, "band/user.html",{'user':user})
    else:
        form = UserForm()
    return render(request, 'band/user_edit.html', {'form': form})