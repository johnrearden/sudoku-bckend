from rest_framework import serializers
from .models import Profile


class ProfileSerializer(serializers.ModelSerializer):

    is_owner = serializers.SerializerMethodField()

    def get_is_owner(self, obj):
        request = self.context['request']
        return obj.owner == request.user

    class Meta:
        model = Profile
        fields = ['id', 'owner', 'created_on', 'nickname', 'avatar', 'is_owner']