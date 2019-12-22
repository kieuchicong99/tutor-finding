from  django.contrib.auth import hashers

from rest_framework import serializers
from app.models import Phu_huynh

class SerStudent(serializers.ModelSerializer):  
    class Meta:
        model = Phu_huynh
        fields = '__all__'

   
    def checkExist(self,phone):
        """check phone is existed in db or not """
        if Phu_huynh.objects.filter(phone=phone).exists():
            return True
    
        return False

    def save(self, **kwargs):
        student = Phu_huynh(
            ho_ten=self.validated_data['ho_ten'],
            email=self.validated_data['email'],
            mat_khau = hashers.SHA1PasswordHasher().encode(self.validated_data['mat_khau'],salt='123'),
            phone=self.validated_data['phone'],  
            hinh_dai_dien_url=self.validated_data['hinh_dai_dien_url'],
            role=self.validated_data['role']
           
            )
              
        if(not self.checkExist(student.phone)):            
            student.save()
        else :
            raise Exception('Tài khoản đã tồn tại')

class AcceptTutor():
    pass
