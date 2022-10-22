from django.db import models
from recipe.models import Recipe
from collection.models import Collection

class Recipe_Collection(models.Model):
    collection = models.ForeignKey(Collection, on_delete=models.CASCADE)
    recipe = models.ForeignKey(Recipe, on_delete=models.CASCADE)
