from  django.contrib.auth import hashers

from rest_framework import serializers
from app.models import Mon_hoc

class SerSubject(serializers.ModelSerializer):  
    class Meta:
        model = Mon_hoc
        fields =  '__all__'

    def save(self, **kwargs):
        mon = Mon_hoc(
            ten_mon=self.validated_data['ten_mon']           
            )
              
        mon.save()
       