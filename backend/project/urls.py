"""project URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from rest_framework.documentation import include_docs_urls

from django.urls import path
from app.api.api_view import *

urlpatterns = [ 
     path('subjects/',SubjectList.as_view(), name="list-subject" ),
    path('subject/',CreateSubject.as_view(), name="create-subject" ),
    path('class/<int:id>/', ClassDetail.as_view(), name="class-detail"),
    path('student/', Student.as_view(), name="student"),
    path('class/', CreateClass.as_view(), name="class"),
    path('signin/', AuthTutor.as_view(), name="signin"),
    path('tutor/', Tutor.as_view(), name="tutor"),
    
    path('tutors/', TutorList.as_view(), name="tutors"),
    path('tutors/<int:id>/', TutorDetail.as_view(), name='tutor'),
    path('docs/', include_docs_urls(title='Tutor Finding API')),
]
