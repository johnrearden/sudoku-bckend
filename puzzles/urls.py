from django.urls import path
from puzzles import views

urlpatterns = [
    path('sudoku_puzzles/', views.SudokuPuzzlesList.as_view()),
    path('sudoku_puzzles/<int:pk>/', views.SudokuPuzzleDetail.as_view()),
    path('create_new_puzzle_instance/<int:difficulty>/',
         views.CreateNewPuzzleInstance.as_view()),
    path('puzzle_instance/<int:pk>/',
         views.GetPuzzleInstance.as_view()),
]