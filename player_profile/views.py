from django.shortcuts import render
from django.conf import settings
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import generics, status
from rest_framework.renderers import BrowsableAPIRenderer, HTMLFormRenderer

from .serializers import PlayerProfileSerializer


class CreatePlayerProfile(APIView):
    http_method_names = ['get', 'post']
    serializer_class = PlayerProfileSerializer

    def post(self, request):
        serializer = PlayerProfileSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            instance = serializer.save()
            response = Response(status=status.HTTP_201_CREATED)
            response.set_cookie(settings.PLAYER_PROFILE_COOKIE, instance.uuid)
            return response