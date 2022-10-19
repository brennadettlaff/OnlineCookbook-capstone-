from authentication.models import User
from django.db import models
from recipe.models import Recipe


class Ingredients(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    recipe = models.ForeignKey(Recipe, on_delete=models.CASCADE)
    name = models.CharField(max_length=3000)