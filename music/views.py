from django.shortcuts import render 
#interger argument
def index(request):
    return render(request,"index.html")
def all_bands(request):
    return render(request,"band/all_bands.html")

def band(request, band_id):
    return render(request, "band/band.html")
