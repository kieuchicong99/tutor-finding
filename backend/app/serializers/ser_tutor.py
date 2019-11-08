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