from rest_framework import serializers
from .models import SudokuPuzzle


class SudokuPuzzleSerializer(serializers.ModelSerializer):
    creator = serializers.ReadOnlyField(source='created_by.username')
    is_owner = serializers.SerializerMethodField()

    def get_is_owner(self, obj):
        request = self.context['request']
        return request.user == obj.created_by

    class Meta:
        model = SudokuPuzzle
        fields = ['id', 'grid', 'created_on', 'difficulty',
                  'instances_created', 'instances_completed', 'creator',
                  'is_owner',]