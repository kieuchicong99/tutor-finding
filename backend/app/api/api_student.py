
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
                    return Response({"success": True, "message": "Đăng kí thành công ",  "data":student_serializer.data}, status.HTTP_200_OK)
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
            return Response({"success": True,"token": jwt_encode_handler,"role":phu_huynh.role, "data":studentSerializer.data} )
        else:
            return Response({"success": False,"message": "Tài khoản hoặc mật khẩu không đúng"})
class StudentDetail(APIView):
    """
    get:
     Trả về thông tin chi tiết của 1 student
    """
    def get(self, request, id):
        student=Phu_huynh.objects.get(id_phu_huynh=id)
        studentDetailSerializer=SerStudent(student)
        return Response(
            {
                "success": True,
                "data": studentDetailSerializer.data
            }
        )

class UpdateStudent(APIView):
    # view for TuTor
    schema=ManualSchema(fields=[
        coreapi.Field(
            "id_phu_huynh",
            required=True,
            location="form",
            schema=coreschema.String()
        ),
        coreapi.Field(
            "ho_ten",
            # required=True,
            location="form",
            schema=coreschema.String()
        ),
        coreapi.Field(
            "email",
            # required=True,
            location="form",
            schema=coreschema.String()
        ),
        coreapi.Field(
            "ngay_sinh",
            # required=True,
            location="form",
            schema=coreschema.String()
        ),
        coreapi.Field(
            "mat_khau",
            # required=True,
            location="form",
            schema=coreschema.String()
        ),
         coreapi.Field(
            "hinh_dai_dien_url",
            # required=True,
            location="form",
            schema=coreschema.String()
        ),
        coreapi.Field(
            "gioi_thieu",
            # required=True,
            location="form",
            schema=coreschema.String()
        ),
         coreapi.Field(
            "gioi_tinh",
            # required=True,
            location="form",
            schema=coreschema.String()
        ),
         coreapi.Field(
            "dia_chi",
            # required=True,
            location="form",
            schema=coreschema.String()
        ),
         coreapi.Field(
            "phone",
            # required=True,
            location="form",
            schema=coreschema.String()
        ),
        ])
    def post(self, request):
        id_phu_huynh= request.data['id_phu_huynh']
        student=Phu_huynh.objects.get(id_phu_huynh=id_phu_huynh)
        old_student =  Phu_huynh.objects.get(id_phu_huynh=id_phu_huynh)
        print("request data:", request.data)

        if ("ho_ten" in request.data and(request.data['ho_ten']!='')) :
            ho_ten=request.data['ho_ten']
            student.ho_ten= ho_ten
              
        if ("email" in request.data and(request.data['email']!='')):
            email=request.data['email']
            student.email = email
        
        if ("ngay_sinh" in request.data and(request.data['ngay_sinh']!='')):
            ngay_sinh=request.data['ngay_sinh']
            student.ngay_sinh = ngay_sinh

        if ("mat_khau" in request.data and(request.data['mat_khau']!='')):
            mat_khau=hashers.SHA1PasswordHasher().encode(request.data['mat_khau'],salt='123')
            student.mat_khau = mat_khau

        if ("hinh_dai_dien_url" in request.data and(request.data['hinh_dai_dien_url']!='')):
            hinh_dai_dien_url=request.data['hinh_dai_dien_url']
            student.hinh_dai_dien_url = hinh_dai_dien_url

        if  ("gioi_thieu" in request.data and(request.data['gioi_thieu']!='')):
            gioi_thieu = request.data['gioi_thieu']
            student.gioi_thieu= gioi_thieu

        if  ("gioi_tinh" in request.data and(request.data['gioi_tinh']!='')):
            gioi_tinh = request.data['gioi_tinh']
            student.gioi_tinh = gioi_tinh

        if ("dia_chi" in request.data and(request.data['dia_chi']!='')):
            dia_chi= request.data['dia_chi']
            student.dia_chi= dia_chi

        if ("phone" in request.data and(request.data['phone']!='')):
            phone = request.data['phone']
            student.phone = phone   
        
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
