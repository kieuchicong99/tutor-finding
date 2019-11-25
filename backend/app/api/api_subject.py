from rest_framework.views import APIView
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from app.models import Mon_hoc
from rest_framework import generics
from rest_framework.schemas import ManualSchema
from rest_framework import status
from app.serializers.ser_subject import SerSubject

class CreateSubject(APIView):  
    

    def get(self,request):
        
        subjects = [
            {
                "ten_mon":"Toán"
            },
            {
                "ten_mon":"Lý"
            },
            {
                "ten_mon":"Hóa"
            },
            {
                "ten_mon":"Văn"
            },
            {
                "ten_mon":"Anh"
            },
            {
                "ten_mon":"Sinh học"
            },
            {
                "ten_mon":"Lịch sử"
            },
            {
                "ten_mon":"Địa lý"
            },
            {
                "ten_mon":"Tin Học"
            },
            {
                "ten_mon":"Tiếng Nhật"
            }
        ]

        try:
            try:
                for subject in subjects: 

                    subject_serializer= SerSubject(data={
                        "ten_mon":subject["ten_mon"]
                    })
                    if subject_serializer.is_valid():
                        subject_serializer.save()
                    
                    else:
                        print("Error!")
                return Response({"success": True, "message": "Tạo môn học thành công"}, status.HTTP_200_OK)
            except Exception as e:
                print("Error:", e)
                return Response({"success": False, "message": e}, status.HTTP_500_INTERNAL_SERVER_ERROR)
            
        except Exception as e:
            print("Error:", e)
            return Response({"success": False, "message": "Lỗi hệ thống"}, status.HTTP_500_INTERNAL_SERVER_ERROR)

class SubjectList(APIView):
    def get(self, request):
        """
        get:
        Trả về danh sách các môn học
        """
        mon_hoc = Mon_hoc.objects.all()
        subject_serializer = SerSubject(mon_hoc,many=True)
        return Response({"success":True,"data":subject_serializer.data})
        
