from django.urls import path

from . import views

urlpatterns = [
    path('', views.get_favorites),
    path('delete/<int:pk>/', views.delete_favorite),
]