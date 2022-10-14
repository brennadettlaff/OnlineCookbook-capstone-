from django.urls import path

from . import views

urlpatterns = [
    path('', views.ingredients_list),
    path('add/', views.add_ingredient),
]