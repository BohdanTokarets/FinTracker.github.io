from django.shortcuts import render

# Create your views here.

def index(request):
    return render(request, 'base.html')

def main(request):
    return render(request, 'main_site.html')