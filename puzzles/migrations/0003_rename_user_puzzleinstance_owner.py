# Generated by Django 3.2.23 on 2023-11-28 11:21

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('puzzles', '0002_sudokupuzzle_created_by'),
    ]

    operations = [
        migrations.RenameField(
            model_name='puzzleinstance',
            old_name='user',
            new_name='owner',
        ),
    ]
