from re import S
import re
from rest_framework import serializers
from django.contrib.auth import get_user_model
from django.shortcuts import get_object_or_404
from django.contrib.auth import authenticate 
from rest_framework import exceptions


from accounts.models import employee

User = get_user_model()


class Loginserializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['email']


class SignUpSerializer(serializers.Serializer):
    email = serializers.EmailField()
    domain = serializers.CharField()
    password = serializers.CharField()
   
    def create(self, validateddata):
        email = validateddata.pop("email")
        username = validateddata.pop("domain")
        password = validateddata.pop("password")
        user = User.objects.create(email=email,username=username,password=password)
        user.save()
        return user


class GetUserSerilaizer(serializers.ModelSerializer):
    domain =  serializers.SerializerMethodField('get_domain')
    class Meta:
        model = User
        fields = [
            "id",
            "is_staff",
            "email",
            'domain'
        
        ]
        extrakwargs = {"password": {"writeonly": True}}
        readonlyfields = ["id",]

    def get_domain(self,ob):
        return ob.username

   

class employeeserializer(serializers.ModelSerializer):

    class Meta:
        model = employee
        fields = ['name','domain','first_dose','second_dose','both','not_both','created_date']


class AuthTokenSerializer(serializers.Serializer):
    email = serializers.CharField(
        label=("email"),
        write_only=True
    )
   
    def validate(self, attrs):
        username = attrs.get('email')
    

        if username :
            user = authenticate(request=self.context.get('request'),
                                username=username)

            # The authenticate call simply returns None for is_active=False
            # users. (Assuming the default ModelBackend authentication
            # backend.)
            if not user:
                msg = ('Unable to log in with provided credentials.')
                raise serializers.ValidationError(msg, code='authorization')
        else:
            msg = ('Must include "username" and "password".')
            raise serializers.ValidationError(msg, code='authorization')

        attrs['user'] = user
        return attrs
