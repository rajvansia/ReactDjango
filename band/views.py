from django.shortcuts import render 
from models import Band
#interger argument
def all_bands(request):
    return render(request,"band/all_bands.html")

def band(request, band_id):
    band=Band.objects.get(pk=band_id)
    return render(request, "band/band.html",{'band':band})
#django dictionay key value pairs