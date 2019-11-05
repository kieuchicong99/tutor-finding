from rest_framework.views import APIView
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from app.models import Gia_su
from app.serializers import Tutors, Tutor
from rest_framework import generics


class TutorList(APIView):

    """
    get:
     Trả về danh sách các gia sư mặc định
    """
    def get(self, request):
        tutors = Gia_su.objects.all()
        tutorSerializer = Tutors(tutors,many = True)
        return  Response(
            {
                "success":True,
                "tutors":tutorSerializer.data
            }
        )
# class TutorListFilter(APIView):
#     """
#     get:
#      Trả về danh sách các gia sư vời filter
#     """
#     def get(self, request):
#         for tutor in Gia_su:
#             if():
#                 pass
#         tutors = Gia_su.objects.all()
#         tutorSerializer = Tutors(tutors,many = True)
#         return  Response(
#             {
#                 "success":True,
#                 "tutors":tutorSerializer.data
#             }
#         )

class PurchaseList(generics.ListAPIView):
    serializer_class = Tutors

    def get_queryset(self):
        """
        Optionally restricts the returned purchases to a given user,
        by filtering against a `username` query parameter in the URL.
        """
        queryset = Tutors.objects.all()
        username = self.request.query_params.get('_id', None)
        if username is not None:
            queryset = queryset.filter(purchaser__username=username)
        return queryset

class TutorDetail(APIView):
    """
    get:
     Trả về thông tin chi tiết của 1 gia sư
    """
    def get (self, request,id):
        tutor = Gia_su.objects.get(id_gia_su=id)
        tutorDetailSerializer = Tutor(tutor)
        return  Response(
            {
                "success":True,
                "detail":tutorDetailSerializer.data
            }
        )
