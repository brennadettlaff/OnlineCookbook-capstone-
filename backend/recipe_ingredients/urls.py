from django.urls import path

from . import views

urlpatterns = [
    path('', views.ri_list),
    path('add/', views.add_junction),
    path('recipe/<int:recipe_id>/', views.recipe_list)
]