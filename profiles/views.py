from django.http import Http404, JsonResponse
from rest_framework import status, generics, permissions
from rest_framework.views import APIView
from rest_framework.response import Response

from .models import Profile
from .serializers import ProfileSerializer
from sudoku_bckend.permissions import IsOwnerOrReadOnly

class ProfileDetail(generics.RetrieveUpdateAPIView):
    serializer_class = ProfileSerializer
    permission_classes = [IsOwnerOrReadOnly]
    queryset = Profile.objects.all()
