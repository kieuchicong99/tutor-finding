from rest_framework.views import APIView
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from app.models import Gia_su
from app.serializers import Tutors, Tutor


class TutorList(APIView):

    """
    get:
     Trả về danh sách các gia sư
    """
    def get(self, request):
        tutors = Gia_su.objects.all()
        tutorSerializer = Tutors(tutors,many = True)
        return  Response(
            {
                "success":True,
                "tutors":tutorSerializer.data
            }
        )
    
    

class TutorDetail(APIView):
    """
    get:
     Trả về thông tin chi tiết của 1 gia sư
    """

    def get (self, request,id):
        tutor = Gia_su.objects.get(id_gia_su=id)
        tutorDetailSerializer = Tutor(tutor)
        return  Response(
            {
                "success":True,
                "detail":tutorDetailSerializer.data
            }
        )
