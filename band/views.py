from django.shortcuts import render 
from models import Band
from rest_framework import generics
from serializers import BandSerializer
#interger argument
def all_bands(request):
    return render(request,"band/all_bands.html")
# class base views a serilize that data
class BandDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset=Band.objects.all()
    serializer_class=BandSerializer

def band(request, band_id,format=None):
    band=Band.objects.get(pk=band_id)
    return render(request, "band/band.html",{'band':band})
#django dictionay key value pairs

#now create the band detail view you  defined in api

    