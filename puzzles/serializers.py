from rest_framework import serializers
from .models import SudokuPuzzle, PuzzleInstance


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


class PuzzleInstanceSerializer(serializers.ModelSerializer):

    is_owner = serializers.SerializerMethodField()
    difficulty = serializers.ReadOnlyField(source='puzzle.get_difficulty_display')
    owner_name = serializers.ReadOnlyField(source='owner.username')

    def get_is_owner(self, obj):
        request = self.context['request']
        return request.user == obj.owner

    class Meta:
        model = PuzzleInstance
        fields = ['id', 'puzzle', 'owner', 'owner_name', 'grid', 'started_on',
                  'last_modified', 'completed', 'difficulty', 'is_owner']