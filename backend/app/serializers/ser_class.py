from  django.contrib.auth import hashers

from rest_framework import serializers
from app.models import Gia_su,Lop_yeu_cau

class SerClass(serializers.ModelSerializer):  
    class Meta:
        model = Lop_yeu_cau
        fields =  '__all__'

    def save(self, **kwargs):
        lop_yeu_cau = Lop_yeu_cau(
            id_phu_huynh=self.validated_data['id_phu_huynh'],
            trang_thai=self.validated_data['trang_thai'],
            mo_ta=self.validated_data['mo_ta'],
            hinh_thuc_day=self.validated_data['hinh_thuc_day'],
            yeu_cau_gioi_tinh =self.validated_data['yeu_cau_gioi_tinh'],
            so_buoi_hoc_moi_tuan =self.validated_data['so_buoi_hoc_moi_tuan'],
            so_gio_moi_buoi=self.validated_data['so_gio_moi_buoi'],  
            gia_thue_moi_buoi=self.validated_data['gia_thue_moi_buoi'],
            dia_chi=self.validated_data['dia_chi'],
            mon_hoc=self.validated_data['mon_hoc'],
           
            )
              
        lop_yeu_cau.save()
       