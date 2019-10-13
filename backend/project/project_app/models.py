from django.db import models
from datetime import date, datetime, timedelta
from django.db.models import Avg

# Create your models here.
class User(models.Model):
    name = models.CharField(max_length=200)
    last_name = models.CharField(max_length=200, blank=True)
    avatar = models.ImageField(upload_to='avatar')
    email = models.EmailField(max_length=254, unique=True)
    password = models.CharField(max_length=200)
    contact = models.CharField(max_length=20, blank=True)

    def become_student(self):
        s = Student(user=self)
        s.save()
        return s

    def become_tutor(self, short_bio, is_private, rate=0):
        if is_private:
            t = PrivateTutor(user=self, shortBio=short_bio, rate=rate)
            t.save()
        else:
            t = ContractedTutor(user=self, shortBio=short_bio)
            t.save()
        return t

        if isTutor and not isStudent:
            t = Tutor.objects.get(user=self)
            array = BookedSlot.objects.filter(tutor=t, status__in=statusesToGet).order_by('date')
            return array

    def __str__(self):
        return self.name
