from django.db import models
from django.db.models.signals import post_save
from django.contrib.auth.models import User

class Profile(models.Model):
    owner = models.OneToOneField(
        User, on_delete=models.CASCADE, related_name='profile')
    created_on = models.DateTimeField(auto_now_add=True)
    nickname = models.CharField(max_length=16, null=True, blank=True)
    avatar = models.ImageField(
        upload_to='images/', default='default_profile_ktdivp', blank=True)
    country = models.CharField(max_length=2, default="IE")

    def __str__(self):
        return f'{self.owner.username}, ({self.nickname}) since {self.created_on}'


def create_profile(sender, instance, created, **kwargs):
    if created:
        Profile.objects.create(owner=instance)

post_save.connect(create_profile, sender=User)