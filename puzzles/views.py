from django.http import Http404, JsonResponse
from rest_framework import status, generics, permissions
from rest_framework.views import APIView
from rest_framework.response import Response

from random import choice
from .models import SudokuPuzzle, PuzzleInstance
from .serializers import SudokuPuzzleSerializer, PuzzleInstanceSerializer
from sudoku_bckend.permissions import IsOwnerOrReadOnly


class SudokuPuzzlesList(generics.ListCreateAPIView):
    serializer_class = SudokuPuzzleSerializer
    permission_classes = [permissions.IsAdminUser]
    queryset = SudokuPuzzle.objects.all()

    def perform_create(self, serializer):
        serializer.save(created_by=self.request.user)


class SudokuPuzzleDetail(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = SudokuPuzzleSerializer
    permission_classes = [permissions.IsAdminUser]
    queryset = SudokuPuzzle.objects.all()


class GetPuzzleInstance(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = PuzzleInstanceSerializer
    permission_classes = [IsOwnerOrReadOnly]
    queryset = PuzzleInstance.objects.all()


class CreateNewPuzzleInstance(APIView):
    def get(self, request, difficulty):
        instances = PuzzleInstance.objects.filter(owner=request.user)
        instances = instances.filter(puzzle__difficulty=difficulty)
        print(instances)
        used_puzzles = {instance.puzzle.id for instance in instances}
        unused_puzzles = SudokuPuzzle.objects.filter(difficulty=difficulty)
        unused_puzzles = unused_puzzles.exclude(id__in=used_puzzles)

        if unused_puzzles:
            # Select a puzzle at random from unused puzzles
            sudoku_puzzle = choice(unused_puzzles)
            instance = PuzzleInstance(
                puzzle=sudoku_puzzle,
                owner=request.user,
                grid=sudoku_puzzle.grid,
            )
            instance.save()
            serializer = PuzzleInstanceSerializer(instance, context={'request': request})
            return Response(serializer.data)
        else:
            return Response(
                status=status.HTTP_409_CONFLICT,
                data={'message': (f'You\'ve tried all the puzzles at that difficulty level!')}
            )

    
class GetRandomExistingInstance(APIView):
    def get(self, request, difficulty):
        choices = SudokuPuzzle.objects.filter(difficulty=difficulty)
        original_puzzle = choice(choices)

        if original_puzzle:
            instance = PuzzleInstance.objects.create(
                puzzle=original_puzzle,
                owner=request.user,
                grid=original_puzzle.grid,
            )
            instance.save()
            serializer = PuzzleInstanceSerializer(
                instance, 
                context={'request': request})
            return Response(serializer.data)
        else:
            return Response(
                status=status.HTTP_404_NOT_FOUND,
                data={'message': ('No puzzles at that difficulty level in DB')}
            )