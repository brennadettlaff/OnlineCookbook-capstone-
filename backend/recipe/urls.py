from django.urls import path

from . import views

urlpatterns = [
    path('', views.recipe_list),
    path('user/', views.user_recipe),
    path('edit/<int:pk>/', views.edit_recipe),
    path('details/<int:pk>/', views.recipe_details),
]