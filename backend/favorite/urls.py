from django.urls import path

from . import views

urlpatterns = [
    path('', views.get_users_favorites),
    path('delete/<int:pk>/', views.delete_favorite),
    path('recipe/<int:recipe_id>/', views.get_favorite),
]