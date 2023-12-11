from django.db import models
from django.contrib.auth.models import User


class SudokuPuzzle(models.Model):
    DIFFICULTIES = (
        (0, 'Easy'),
        (1, 'Medium'),
        (2, 'Hard'),
        (3, 'Vicious'),
    )

    grid = models.CharField(max_length=81)
    created_by = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
    created_on = models.DateTimeField(auto_now_add=True)
    difficulty = models.IntegerField(choices=DIFFICULTIES, default=0)
    instances_created = models.IntegerField(default=0)
    instances_completed = models.IntegerField(default=0)

    def __str__(self):
        username = self.created_by.username if self.created_by else 'Deleted'
        return f'''
            Puzzle {self.id} created by {username}
            on {self.created_on}
            '''
        
    
class PuzzleInstance(models.Model):
    puzzle = models.ForeignKey(
        SudokuPuzzle, on_delete=models.CASCADE, related_name="instances")
    owner = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name="puzzle_instances")
    grid = models.CharField(max_length=81)
    started_on = models.DateTimeField()
    completed = models.BooleanField(default=False)
    completed_at = models.DateTimeField()
    time_taken = models.DurationField(null=True)

    def __str__(self):
        return f'{self.owner.username}\'s puzzle ({self.id})'

    def save(self, *args, **kwargs):
        timedelta = self.completed_at - self.started_on
        self.time_taken = timedelta
        super().save(*args, **kwargs)
    
