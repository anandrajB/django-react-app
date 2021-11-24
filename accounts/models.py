from django.db import models
from django.contrib.auth import get_user_model
from rest_framework import serializers


User = get_user_model()

# Create your models here.
class employee(models.Model):

    

    name = models.CharField(max_length=25)
    domain = models.ForeignKey(User,on_delete=models.CASCADE,default=None)
    first_dose = models.BooleanField(default=False)
    second_dose = models.BooleanField(default=False)
    both = models.BooleanField(default=False)
    not_both = models.BooleanField(default=False)
    created_date = models.DateTimeField(auto_now_add=True)
    

    def clean_name(self):
        return self.cleaned_data["domain"].upper()


    def __str__(self):
        return "%s - %s" % (self.name, self.domain)



    