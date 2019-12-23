from rest_framework.views import APIView
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from app.models import Lop_yeu_cau
from app.serializers.ser_class import SerClass
from rest_framework import generics
from rest_framework.schemas import ManualSchema
import coreapi
import coreschema
from django.core.paginator import Paginator
from rest_framework import status

class CreateClass(APIView):
    
    schema = ManualSchema(fields=[
    coreapi.Field(
        "id_phu_huynh",
        required=True,
        location="form",
        schema=coreschema.Integer()
    ),
    coreapi.Field(
        "trang_thai",
        required=True,
        location="form",
        schema=coreschema.String()
    ),
    coreapi.Field(
        "mo_ta",
        required=True,
        location="form",
        schema=coreschema.String()
    ),
    coreapi.Field(
        "hinh_thuc_day",
        required=True,
        location="form",
        schema=coreschema.String()
    ),
    coreapi.Field(
        "yeu_cau_gioi_tinh",
        required=True,
        location="form",
        schema=coreschema.String()
    ),
    coreapi.Field(
        "so_buoi_hoc_moi_tuan",
        required=True,
        location="form",
        schema=coreschema.Integer()
    ),
    coreapi.Field(
        "so_gio_moi_buoi",
        required=True,
        location="form",
        schema=coreschema.Integer()
    ),
    coreapi.Field(
        "gia_thue_moi_buoi",
        required=True,
        location="form",
        schema=coreschema.Integer()
    ),
    coreapi.Field(
        "dia_chi",
        required=True,
        location="form",
        schema=coreschema.String()
    ),
    coreapi.Field(
        "mon_hoc",
        required=True,
        location="form",
        schema=coreschema.String()
    )
    ]) 

    def post(self, request):
        
        id_phu_huynh=request.data['id_phu_huynh']
        trang_thai = request.data['trang_thai']
        mo_ta = request.data['mo_ta']
        hinh_thuc_day = request.data['hinh_thuc_day']
        yeu_cau_gioi_tinh = request.data['yeu_cau_gioi_tinh']
        so_buoi_hoc_moi_tuan = request.data['so_buoi_hoc_moi_tuan']
        so_gio_moi_buoi = request.data['so_gio_moi_buoi']
        gia_thue_moi_buoi= request.data['gia_thue_moi_buoi']
        dia_chi= request.data['dia_chi']
        mon_hoc= request.data['mon_hoc']

        class_serializer=SerClass(
            data={
                    "id_phu_huynh":id_phu_huynh,
                    "trang_thai": trang_thai,
                    "mo_ta": mo_ta,
                    "hinh_thuc_day": hinh_thuc_day,
                    "yeu_cau_gioi_tinh": yeu_cau_gioi_tinh,
                    "so_buoi_hoc_moi_tuan": so_buoi_hoc_moi_tuan,
                    "so_gio_moi_buoi":so_gio_moi_buoi,
                    "gia_thue_moi_buoi":gia_thue_moi_buoi,
                    "dia_chi":dia_chi
                    "mon_hoc":mon_hoc

                })
        try:
            if class_serializer.is_valid():
                try:
                    class_serializer.save()
                    return Response({"success": True, "message": "Mở lớp học thành công"}, status.HTTP_200_OK)
                except Exception as e:
                    print("Error:", e)
                    return Response({"success": False, "message": e}, status.HTTP_500_INTERNAL_SERVER_ERROR)
            else:
               print(class_serializer.errors)
               return Response({"success": False, "message": class_serializer.errors}, 400)
        except Exception as e:
            print("Error:", e)
            return Response({"success": False, "message": "Lỗi hệ thống"}, status.HTTP_500_INTERNAL_SERVER_ERROR)

class ClassDetail(APIView):
    def get(self, request, id):
        """
        get:
        Trả về thông tin của một lớp học
        """
        _class = Lop_yeu_cau.objects.get(id_lop=id)
        class_serializer = SerClass(_class)
        return Response(
            {
                "success":True,
                "data":class_serializer.data
            }
        )

class ClassListPage(APIView):
    
    "Lấy danh sách các lớp theo page"
    def get(self, request, page):
        """
        get:
        Trả về danh sách theo page
        """
        _classes = Lop_yeu_cau.objects.all()
        paginator = Paginator(_classes,10)
        listClass= paginator.get_page(page)
        listClassSerializer = SerClass(listClass, many=True)

        return Response(
            {
                "success":True,
                "data":listClassSerializer.data
            }
        )

class ClassListDefault(APIView):
    """
    get:
     Trả về danh sách các lớp học
    """

    def get(self, request):
        _class = Lop_yeu_cau.objects.all()
        class_serializer = SerClass(_class, many=True)
        return Response(
            {
                "success": True,
                "class": class_serializer.data
            }
        )


# class TutorFind(APIView):
#  pass