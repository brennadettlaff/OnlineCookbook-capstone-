from django.urls import path

from . import views

urlpatterns = [
    path('view/<int:recipe_id>/', views.notes_list)
]