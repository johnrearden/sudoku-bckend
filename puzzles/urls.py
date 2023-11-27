from django.urls import path
from puzzles import views

urlpatterns = [
    path('sudoku_puzzles/', views.SudokuPuzzlesList.as_view()),
    # 
    # path('sudoku_puzzles/<int:pk>/', views.SudokuPuzzlesDetail.as_view()),
]