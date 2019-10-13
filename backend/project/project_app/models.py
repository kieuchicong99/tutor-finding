from django.db import models
from datetime import date, datetime, timedelta
from django.db.models import Avg

# Create your models here.

# User
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

# Tutor
class Tutor(PolymorphicModel):
    user = models.OneToOneField(User)
    course = models.ManyToManyField(Course, blank=True)
    shortBio = models.CharField(max_length=300)
    rating = models.FloatField(default=0)
    subject_tags = models.ManyToManyField(Tag, blank=True)
    isActivated = models.BooleanField(default=True)

    def create_unavailable_slot(self, date, time_start):
        pass

    def remove_unavailable_slot(self, date, time_start):
        UnavailableSlot.objects.get(tutor=self, date=date, time_start=time_start).delete()

    def add_course(self, courseCode):
        c = Course.objects.get(code=courseCode)
        self.course.add(c)
        self.save()

    def remove_course(self, courseCode):
        c = Course.objects.get(code=courseCode)
        self.course.remove(c)
        self.save()

    def activate_deactivate(self):
        if self.isActivated:
            self.isActivated = False
            self.save()
        else:
            self.isActivated = True
            self.save()

    def add_tag(self, tagName, create):
        if create:
            t = Tag(tag_name=tagName)
            t.save()

        t2 = Tag.objects.get(tag_name=tagName)
        self.subject_tags.add(t2)
        self.save()

    def remove_tag(self, tagName):
        t = Tag.objects.get(tag_name=tagName)
        self.subject_tags.remove(t)
        self.save()

    def update_rating(self):
        newRating = Review.objects.filter(tutor=self).aggregate(Avg('rating'))
        print(newRating)
        setattr(self, 'rating', newRating['rating__avg'])
        self.save()

    def __str__(self):
        return self.user.name

# Student
class Student(models.Model):
    user = models.OneToOneField(User)

    def Accept(self, date, time_start, duration, tutor):
        end = (datetime.strptime(str(time_start), '%H:%M:%S') + timedelta(hours=duration)).time()
        accept = BookedSlot(date=date, time_start=time_start, time_end=end, tutor=tutor, student=self, status="ACCEPTED")
        accept.save()
        transaction = None
        if isinstance(tutor, PrivateTutor):
            chargesWithCommission = round(tutor.rate * 1.05, 2)
            self.user.wallet.subtract_funds(chargesWithCommission)
            TempWallet = SpecialWallet.objects.get(name='Temporary')
            TempWallet.add_funds(chargesWithCommission)
            transaction = accept.create_transaction_record("SESSIONBOOKED", True, True)
        return accept, transaction

    def __str__(self):
        return self.user.name
