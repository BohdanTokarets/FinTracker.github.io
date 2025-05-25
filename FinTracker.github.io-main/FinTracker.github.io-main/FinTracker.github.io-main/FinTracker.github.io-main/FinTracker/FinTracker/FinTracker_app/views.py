from django.shortcuts import render, get_list_or_404, redirect
from django.contrib.auth.forms import UserCreationForm, AuthenticationForm
from django.contrib.auth import login, logout, authenticate

# Create your views here.

def index(request):
    return render(request, 'base.html')

def main(request):
    return render(request, 'main_site.html')

def login_user(request):
    return render(request, 'login.html')

def logout(request):
    return render(request, 'logout.html')

def count(request):
    return render(request, 'count.html')

def register(request):
    islogin = request.user.is_authenticated
    err = ''
    if request.method == "POST":
        form = UserCreationForm(request.POST)
        if form.is_valid():
            user = form.save()
            username = form.cleaned_data.get("username")
            login(request, user)
            return redirect("/")
        else:
            err = form.errors.as_data()
    form = UserCreationForm
    return render(request, 'register.html', {"form":form, "error":err, "islogin":islogin})