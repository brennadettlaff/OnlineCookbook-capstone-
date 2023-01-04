from django.urls import path

from . import views

urlpatterns = [
    path('', views.get_users_favorites),
    path('delete/<int:pk>/', views.edit_favorite),
    path('recipe/<int:recipe_id>/', views.get_favorite),
    path('recipe/true/', views.get_true_favs),
]