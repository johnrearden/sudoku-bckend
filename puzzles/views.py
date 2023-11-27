from django.http import Http404
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import SudokuPuzzle
from .serializers import SudokuPuzzleSerializer
from sudoku_bckend.permissions import IsOwnerOrReadOnly


class SudokuPuzzlesList(APIView):

    def get(self, request):
        sudoku_puzzles = SudokuPuzzle.objects.all()
        serializer = SudokuPuzzleSerializer(
            sudoku_puzzles, many=True, context={'request', request}
        )
        return Response(serializer.data)
