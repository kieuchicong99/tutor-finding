from  django.contrib.auth import hashers

from rest_framework import serializers
from app.models import Gia_su

class SerTutors(serializers.ModelSerializer):  
    class Meta:
        model = Gia_su
        fields = ['id_gia_su','ho_ten']

class SerTutor(serializers.ModelSerializer):  
    class Meta:
        model = Gia_su
        fields = '__all__'

   
    def checkExist(self,phone):
        """check phone is existed in db or not """
        if Gia_su.objects.filter(phone=phone).exists():
            return True
    
        return False

    def save(self, **kwargs):
        gia_su = Gia_su(
            ho_ten=self.validated_data['ho_ten'],
            email=self.validated_data['email'],
            mat_khau = hashers.SHA1PasswordHasher().encode(self.validated_data['mat_khau'],salt='123'),
            phone=self.validated_data['phone'],  
            hinh_dai_dien_url=self.validated_data['hinh_dai_dien_url'],
            role=self.validated_data['role']
           
            )
              
        if(not self.checkExist(gia_su.phone)):            
            gia_su.save()
        else :
            raise Exception('Tài khoản đã tồn tại')