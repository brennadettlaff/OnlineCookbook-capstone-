from django.urls import path

from . import views

urlpatterns = [
    path('add/', views.add_note),
    path('view/<int:recipe_id>/', views.notes_list),
    path('edit/<int:pk>/', views.edit_note),
]