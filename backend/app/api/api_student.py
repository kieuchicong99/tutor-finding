
from django.shortcuts import get_object_or_404
from  django.contrib.auth import hashers
import coreapi
import coreschema

from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework import generics
from rest_framework.schemas import ManualSchema
from rest_framework_jwt.settings import api_settings
from app.models import Phu_huynh
from app.models import Gia_su
from app.serializers.ser_student import SerStudent


class Student(APIView):
    # view for Student
    schema=ManualSchema(fields=[
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
    def post(self, request):
        ho_ten=request.data['ho_ten']
        email=request.data['email']
        mat_khau=request.data['mat_khau']
        phone=request.data['phone']
        role=2

        student_serializer=SerStudent(
            data={
                    "ho_ten": ho_ten,
                    "mat_khau": mat_khau,
                    "email": email,
                    "phone": phone,
                    "role":role

                })
        try:
            if student_serializer.is_valid():
                try:
                    student_serializer.save()
                    return Response({"success": True, "message": "Đăng kí thành công "}, status.HTTP_200_OK)
                except Exception as e:
                    print("Error:", e)
                    return Response({"success": False, "message": "Số điện thoại đã tồn tại"}, status.HTTP_500_INTERNAL_SERVER_ERROR)
            else:
               print(student_serializer.errors)
               return Response({"success": False, "message": student_serializer.errors}, 400)
        except Exception as e:
            print("Error:", e)
            return Response({"success": False, "message": "Lỗi hệ thống"}, status.HTTP_500_INTERNAL_SERVER_ERROR)


class AuthStudent(APIView):
    # view cho xác thực tài khoản

    schema=ManualSchema(fields=[
        coreapi.Field(
            "phone",
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

    ])
    def post(seft, request):
        phone = request.data['phone']
        mat_khau = request.data['mat_khau']

       
        try:
           phu_huynh = Phu_huynh.objects.get(phone=phone)
        except Exception as e:
            print("Error:",e)
            return Response({"success": False, "message": "Tài khoản không tồn tại"})

        if hashers.SHA1PasswordHasher().verify(mat_khau,phu_huynh.mat_khau):
            studentSerializer = SerStudent(phu_huynh)
            jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER(studentSerializer.data)
            return Response({"success": True,"token": jwt_encode_handler,"role":phu_huynh.role,"ho_ten":phu_huynh.ho_ten} )
        else:
            return Response({"success": False,"message": "Tài khoản hoặc mật khẩu không đúng"})
class StudentDetail(APIView):
    """
    get:
     Trả về thông tin chi tiết của 1 student
    """

class UpdateStudent(APIView):
    # view for TuTor
    schema=ManualSchema(fields=[
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
        )
        ])
    def post(self, request):
        ho_ten=request.data['ho_ten']
        email=request.data['email']
        mat_khau=request.data['mat_khau']
        
        student=Phu_huynh.objects.get(id_phu_huynh=1)
        old_student =  Phu_huynh.objects.get(id_phu_huynh=1)
        student.ho_ten= ho_ten
        student.email = email
        student.mat_khau = mat_khau

        
        try:
            try:
                student.save()
                return Response({"success": True, "message": "Cập nhập thành công ", "old_value":SerStudent(old_student).data, "new_value":SerStudent(student).data}, status.HTTP_200_OK)
            except Exception as e:
                print("Error:", e)
                return Response({"success": False, "message": "Số điện thoại đã tồn tại"}, status.HTTP_500_INTERNAL_SERVER_ERROR)
        except Exception as e:
            print("Error:", e)
            return Response({"success": False, "message": "Lỗi hệ thống"}, status.HTTP_500_INTERNAL_SERVER_ERROR)
