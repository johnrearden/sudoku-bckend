# Generated by Django 3.2.2 on 2024-01-02 21:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('player_profile', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='playerprofile',
            name='uuid',
            field=models.CharField(blank=True, max_length=256, null=True),
        ),
    ]
