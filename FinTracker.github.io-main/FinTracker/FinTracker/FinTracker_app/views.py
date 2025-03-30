from django.shortcuts import render
from django.contrib.auth.forms import UserCreationForm

# Create your views here.

def index(request):
    return render(request, 'base.html')

def main(request):
    return render(request, 'main_site.html')

def register_view(request):
    form = UserCreationForm()
    return render(request, 'register.html', {"form": form})