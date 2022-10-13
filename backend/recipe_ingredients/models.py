from django.db import models
from ingredients.models import Ingredients
from recipe.models import Recipe


class Recipe_Ingredients(models.Model):
    recipe = models.ForeignKey(Recipe, on_delete=models.CASCADE)
    ingredients = models.ForeignKey(Ingredients, on_delete=models.CASCADE)