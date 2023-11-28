from django.urls import path
from profiles import views

urlpatterns = [
    path('profile/<int:pk>/', views.ProfileDetail.as_view()),
]