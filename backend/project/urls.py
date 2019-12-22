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
    path('api/subjects/',SubjectList.as_view(), name="list-subject" ),
    path('api/subject/',CreateSubject.as_view(), name="create-subject" ),
    path('api/class/<int:id>/', ClassDetail.as_view(), name="class-detail"),
    path('api/student/', Student.as_view(), name="student"),
    path('api/student/<int:id>/', StudentDetail.as_view(), name='student-detail'),
    path('api/class/', CreateClass.as_view(), name="class"),
    path('api/signin/', AuthTutor.as_view(), name="signin"),
    path('api/tutor/', Tutor.as_view(), name="tutor"),
    path('api/signinstudent/',AuthStudent.as_view(),name="signinstudent"),
    path('api/listclasspage/<int:page>',ClassListPage.as_view(),name="listclasspage"),
    path('api/tutors/', TutorList.as_view(), name="tutors"),
    path('api/tutors/<int:id>/', TutorDetail.as_view(), name='tutor'),
    path('api/tutorlistpage/<int:page>',TutorListPage.as_view(),name="listtutorpage"),
    path('api/docs/', include_docs_urls(title='Tutor Finding API')),
    path('api/updatetutor/', UpdateTutor.as_view(), name="tutor"),
    path('api/updatestudent/', UpdateStudent.as_view(), name="student"),
]
