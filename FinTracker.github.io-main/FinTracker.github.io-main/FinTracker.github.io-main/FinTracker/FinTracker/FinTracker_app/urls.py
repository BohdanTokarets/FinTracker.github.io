from django.urls import path
from . import views

urlpatterns = [
    path('', views.index),
    path('main/', views.main),
    path('register/', views.register),
    path('login/', views.login_user, name='login'),
    path('logout/', views.login, name='logout'),
]