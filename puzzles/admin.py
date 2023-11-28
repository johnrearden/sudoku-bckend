from django.contrib import admin
from .models import SudokuPuzzle


@admin.register(SudokuPuzzle)
class SudokuPuzzleAdmin(admin.ModelAdmin):
    list_display = ('id', 'grid', 'created_on', 'created_by', 'difficulty',
                    'instances_created', 'instances_completed',)
    list_editable = ('grid', 'difficulty',
                    'instances_created', 'instances_completed',)
