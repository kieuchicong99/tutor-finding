from rest_framework.views import APIView
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from app.models import Gia_su
from rest_framework import generics
from .api_tutor import TutorList ,TutorDetail, Tutor



