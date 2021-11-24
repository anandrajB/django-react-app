from rest_framework import permissions, serializers
from rest_framework import status
from rest_framework.fields import JSONField
from rest_framework.generics import (
  CreateAPIView,
  ListAPIView,
  ListCreateAPIView,
  RetrieveUpdateDestroyAPIView,
)
from django.core.exceptions import ValidationError
from django.utils.encoding import uri_to_iri
from rest_framework.authtoken.models import Token
from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import get_object_or_404
from django.shortcuts import render
from rest_framework.permissions import AllowAny, IsAuthenticated
from django.contrib.auth import get_user_model
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from django.contrib.auth import authenticate , login , logout

from accounts.models import  employee
from .serializers import AuthTokenSerializer, Loginserializer, SignUpSerializer , GetUserSerilaizer, employeeserializer , AuthTokenSerializer
from rest_framework.views import APIView
from rest_framework import renderers , parsers

from rest_framework.status import HTTP_200_OK , HTTP_204_NO_CONTENT, HTTP_401_UNAUTHORIZED, HTTP_406_NOT_ACCEPTABLE



User = get_user_model()


class UserLoginapiView(CreateAPIView):
    queryset = User.objects.all()
    serializer_class = Loginserializer
    permission_classes = [AllowAny]
    

    def post(self, request):
        username = request.data.get("email", None)
        if username:
            user = authenticate(username = username)
            if user:
                login(request, user)
                token, created = Token.objects.get_or_create(user=user)
                data = {
                    "user_id": user.id,
                    "email": user.email,
                     "token": token.key,
                    "is_admin": user.is_staff,
                    "domain" : user.username
                }
                return Response({"status": "success", "data": data}, status=HTTP_200_OK)
            raise ValidationError("sorry unable to login")
        return Response(
            {
                "status": "failure",
                "data": "You need to provide a valid email",
            },status=HTTP_406_NOT_ACCEPTABLE
        )

#register
class UserSignupView(CreateAPIView):
    queryset = User.objects.all()
    serializer_class = SignUpSerializer
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = SignUpSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"status": "success"})
        return Response({"status": "failure", "data": serializer.errors})


#logout
class UserLogoutView(APIView):
    premission_classes = [IsAuthenticated]

    def post(self, request):
        print("logout")
        logout(request)
        return Response(status=HTTP_204_NO_CONTENT)


def index(request):
  return render(request,'index.html')

#user list
class UserListApiView(ListAPIView):
    queryset = User.objects.all()
    serializer_class = GetUserSerilaizer
    permission_classes = [AllowAny]

    def list(self, request):
        queryset = User.objects.all()
        serializer = GetUserSerilaizer(queryset, many=True)
        return Response({"status": "success", "data": serializer.data})

#emp list
class employeedetails(ListCreateAPIView):
    permission_classes = [AllowAny]
    serializer_class = employeeserializer
    queryset = employee.objects.all()


    def list(self, request):
        queryset = self.get_queryset()
        serializer = employeeserializer(queryset, many=True)
        return Response({"status": "success", "data": serializer.data})

    def create(self, request):
        serializer = employeeserializer(data=request.data)
        if serializer.is_valid():
            serializer.save(domain = self.request.user)
            return Response({"status": "success", "data": serializer.data})
        return Response({"status": "failure", "data": serializer.errors})


    def get_queryset(self):
        user = self.request.user
        if user.is_staff:
            return employee.objects.all().order_by('-id',)
        return employee.objects.filter(domain=user).order_by('-id',)


# emp update
class EmployeeUpdateApiView(RetrieveUpdateDestroyAPIView):
    queryset = employee.objects.all()
    serializer_class = employeeserializer
    permission_classes = [IsAuthenticated]

    def retrieve(self, request, pk=None):
        queryset = employee.objects.all()
        profile = get_object_or_404(queryset, pk=pk)
        serializer = employeeserializer(profile)
        return Response({"status": "success", "data": serializer.data})

    def update(self, request, pk=None):
        queryset = employee.objects.all()
        profile = get_object_or_404(queryset, pk=pk)
        serializer = employeeserializer(profile, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"status": "success", "data": serializer.data})
        return Response({"status": "failure", "data": serializer.errors})


# count domain
class DomainobjectsCountApi(APIView):
    queryset = employee.objects.all()
    permission_classes = [IsAuthenticated]
    serializer_class = employeeserializer

    def get(self,request):
        user = self.request.user
        if user.is_authenticated:
            count = employee.objects.filter(domain=user).count()
            count2 = employee.objects.filter(first_dose=True,domain=user).count()
            count3 = employee.objects.filter(second_dose = True,domain=user).count()
            count4 = employee.objects.filter(both = True,domain=user).count()
            count5 = employee.objects.filter(not_both = True,domain=user).count()

        return Response({"data":{
                "employees": count, 
                "FD": count2,
                "SD": count3,
                "BD": count4,
                "NBD": count5
        }})



class ObtainAuthTokenviewsss(APIView):
    throttle_classes = ()
    permission_classes = ()
    
    parser_classes = (
        parsers.FormParser,
        parsers.MultiPartParser,
        parsers.JSONParser,
    )

    renderer_classes = (renderers.JSONRenderer,)


    def post(self, request):
        serializer = AuthTokenSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        token, created = Token.objects.get_or_create(user=user)

        content = {
            'token': token.key,
        }

        return Response(content)