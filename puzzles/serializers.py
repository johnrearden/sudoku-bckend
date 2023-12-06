from rest_framework import serializers
from .models import SudokuPuzzle, PuzzleInstance
from datetime import datetime


class SudokuPuzzleSerializer(serializers.ModelSerializer):
    creator = serializers.ReadOnlyField(source='created_by.username')
    is_owner = serializers.SerializerMethodField()
    start_time = serializers.SerializerMethodField()

    def get_is_owner(self, obj):
        request = self.context['request']
        return request.user == obj.created_by

    def get_start_time(self, obj):
        return datetime.now()

    class Meta:
        model = SudokuPuzzle
        fields = ['id', 'grid', 'created_on', 'difficulty',
                  'instances_created', 'instances_completed', 'creator',
                  'is_owner', 'start_time']


class PuzzleInstanceSerializer(serializers.ModelSerializer):

    is_owner = serializers.SerializerMethodField()
    original = serializers.ReadOnlyField(source='puzzle.grid')
    difficulty = serializers.ReadOnlyField(source='puzzle.get_difficulty_display')
    owner_name = serializers.ReadOnlyField(source='owner.username')

    def get_is_owner(self, obj):
        request = self.context['request']
        return request.user == obj.owner

    class Meta:
        model = PuzzleInstance
        fields = ['id', 'puzzle', 'owner', 'owner_name', 'grid', 'original', 
        'started_on', 'last_modified', 'completed', 'difficulty', 'is_owner',
        'completed_at']