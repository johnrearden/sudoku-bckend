from django.contrib import admin
from .models import Profile

@admin.register(Profile)
class ProfileAdmin(admin.ModelAdmin):

    list_display = ('id', 'owner', 'created_on', 'nickname',
                    'avatar', 'country',)
    list_editable = ('nickname', 'avatar', 'country')
