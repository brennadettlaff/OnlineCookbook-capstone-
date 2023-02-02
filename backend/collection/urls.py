from django.urls import path

from . import views

urlpatterns = [
    path('', views.get_collections),
    path('details/<int:pk>/', views.collection_details),
    path('edit/<int:pk>/', views.edit_collection)
]