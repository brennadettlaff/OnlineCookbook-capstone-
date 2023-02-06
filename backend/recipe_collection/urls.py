from django.urls import path

from . import views

urlpatterns = [
    path('collection/<int:collection_id>/', views.collection_list),
    path('add/', views.add_junction),
    path('edit/<int:pk>/', views.edit_recipe_collection),
]