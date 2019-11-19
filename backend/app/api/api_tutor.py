
from django.shortcuts import get_object_or_404
import coreapi 
import coreschema 

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import generics
from rest_framework.schemas import ManualSchema

from app.models import Gia_su
from app.serializers.ser_tutor import SerTutors, SerTutor



class TutorList(APIView):

    """
    get:
     Trả về danh sách các gia sư mặc định
    """
    
    def get(self, request):
        tutors = Gia_su.objects.all()
        tutorSerializer = SerTutors(tutors,many = True)
        return  Response(
            {
                "success":True,
                "tutors":tutorSerializer.data
            }
        )

class Tutor(APIView):
    # view for TuTor
    schema = ManualSchema(fields=[
        coreapi.Field(
            "ho_ten",
            required=True,
            location="form",
            schema=coreschema.String()
        ),
        coreapi.Field(
            "email",
            required=True,
            location="form",
            schema=coreschema.String()
        ),
         coreapi.Field(
            "mat_khau",
            required=True,
            location="form",
            schema=coreschema.String()
        ),
        coreapi.Field(
            "phone",
            required=True,
            location="form",
            schema=coreschema.String()
        )])
    def post(self,request):
        ho_ten = request.data['ho_ten']
        email = request.data['email']
        mat_khau = request.data['mat_khau']
        phone = request.data['phone']
        hinh_dai_dien_url='https://google.com'
        
        tutor_serializer = SerTutor(
            data={
                    "ho_ten": ho_ten,
                    "mat_khau": mat_khau,
                    "email":email,
                    "phone":phone,
                    "hinh_dai_dien_url":hinh_dai_dien_url

                })
        try:
         if tutor_serializer.is_valid():
            try:
                tutor_serializer.save()
                return Response({"success": True, "message": "Đăng kí thành công "}, status.HTTP_200_OK)
            except Exception as e:
                print("Error:",e)
                return Response({"success": False, "message": "Số điện thoại đã tồn tại"}, status.HTTP_500_INTERNAL_SERVER_ERROR)
         else:
               print(tutor_serializer.errors)
               return Response({"success": False, "message": tutor_serializer.errors},400)
        except Exception as e:
            print("Error:",e)
            return Response({"success": False, "message": "Lỗi hệ thống"}, status.HTTP_500_INTERNAL_SERVER_ERROR)

       
class TutorDetail(APIView):
    """
    get:
     Trả về thông tin chi tiết của 1 gia sư
    """
    def get (self, request,id):
        tutor = Gia_su.objects.get(id_gia_su=id)
        tutorDetailSerializer = SerTutor(tutor)
        return  Response(
            {
                "success":True,
                "detail":tutorDetailSerializer.data
            }
        )
