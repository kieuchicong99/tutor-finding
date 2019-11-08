from rest_framework import serializers
from app.models import Lop_yeu_cau
from django.db import transation, connection


class SerClass(serializers.ModelSerializer):  
    class Meta:
        model = Lop_yeu_cau
        fields = '__all__'

    @transation.atomic
    def save(request, **kwargs):
        with connection.cursor() as cursor:
            try:
                cursor.execute(
                    "Insert into Lop_yeu_cau (id_phu_huynh, trang_thai, mo_ta, hinh_thuc_day, id_gia_su, id_mon_hoc, yeu_cau_gioi_tinh, ghi_chu, so_buoi_hoc)\
                    VALUES( %d,%s,%s,%s,%d,%d,%s,%s,%d )",
                    [
                        self.validated_data['id_phu_huynh'],
                        self.validated_data['trang_thai'],
                        self.validated_data['mo_ta'],
                        self.validated_data['hinh_thuc_day'],
                        self.validated_data['id_gia_su'],
                        self.validated_data['id_mon_hoc'],
                        self.validated_data['yeu_cau_gioi_tinh'],
                        self.validated_data['ghi_chu'],
                        self.validated_data['so_buoi_hoc']
                    ]

                )
            
            except Exception as e:
                    transaction.set_rollback(True)
                    raise e


