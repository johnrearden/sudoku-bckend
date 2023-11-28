from django.http import Http404, JsonResponse
from rest_framework import status, generics, permissions
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import SudokuPuzzle, PuzzleInstance
from .serializers import SudokuPuzzleSerializer
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


class CreateNewPuzzleInstance(APIView):
    def get(self, request, difficulty):
        instances = PuzzleInstance.objects.filter(user=request.user)
        instances = instances.filter(puzzle__difficulty=difficulty)
        used_puzzles = {instance.puzzle for instance in instances}
        unused_puzzles = SudokuPuzzle.objects.exclude(id__in=used_puzzles)
        ids = [puzzle.id for puzzle in unused_puzzles]
        message = {
            'unused puzzles by id : ': ids
        }

        return JsonResponse(message, safe=False)

    