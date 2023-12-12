from rest_framework import serializers
from .models import Profile


class ProfileSerializer(serializers.ModelSerializer):

    is_owner = serializers.SerializerMethodField()
    username = serializers.ReadOnlyField(source='owner.username')
    country_code = serializers.SerializerMethodField()

    def get_is_owner(self, obj):
        request = self.context['request']
        return obj.owner == request.user

    def get_country_code(self, obj):
        return obj.owner.profile.country_code

    class Meta:
        model = Profile
        fields = ['id', 'owner', 'created_on', 'nickname', 'avatar',
                  'is_owner', 'country', 'username, country_code']