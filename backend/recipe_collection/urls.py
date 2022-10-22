from django.urls import path

from . import views

urlpatterns = [
    path('collection/<int:collection_id>/', views.collection_list)
]