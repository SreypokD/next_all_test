from django.shortcuts import render

# Create your views here.
from rest_framework.views import APIView
from .models import *

class RetrieveImageView(APIView):
    def get(self , request, format= None):
        pass

class UploadImageView(APIView):
    def post(self, request):
        pass

