from rest_framework.views import APIView
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from app.models import Lop_yeu_cau
from app.serializers import  SerClass
from rest_framework import generics


class createClass(APIView):

    """
    post:
     Tạo mới một lớp cần tìm gia sư
    """
    def post(self, request):
        print(request)
        # new_class = Lop_yeu_cau(
        #     id_phu_huynh=,
        #     trang_thai=,
        #     mo_ta=
        #     hinh_thu_day=
        #     id_gia_su=
        #     id_mon_hoc=
        #     yeu_cau_gioi_tinh=
        #     ghi_chu=
        #     so_buoi_hoc=

        # )
        # new_class.save()

        return Response(
            {
                'success':'true'
                'data': new_class
            }
        )
  