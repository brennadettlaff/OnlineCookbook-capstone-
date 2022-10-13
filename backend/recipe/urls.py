from django.urls import path

from . import views

urlpatterns = [
    path('', views.recipe_list),
    path('create/', views.create_recipe),
]