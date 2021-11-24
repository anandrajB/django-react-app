""
from django.contrib import admin
from django.urls import path ,include
from django.views.generic import TemplateView
from rest_framework.authtoken import views
from .views import (
    UserLoginapiView, 
    UserLogoutView, 
    UserSignupView , 
    UserListApiView , 
    employeedetails ,
    DomainobjectsCountApi,
    EmployeeUpdateApiView,
    ObtainAuthTokenviewsss

)

urlpatterns = [
    path('token-verify/', ObtainAuthTokenviewsss,name='token-auth-verification'),
    path('login/',UserLoginapiView.as_view(),name='login'),
    path('register/',UserSignupView.as_view(),name='register'),
    path('logout/', UserLogoutView.as_view(),name='logout'),
    path('user/',UserListApiView.as_view(),name='login'),
    path('emp/', employeedetails.as_view(),name='emp_details'),
    path('emp/<int:pk>', EmployeeUpdateApiView.as_view(),name='emp_updates'),
    path('count/',DomainobjectsCountApi.as_view(),name='count-api'),
]
