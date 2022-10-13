from authentication.models import User
from django.db import models
from recipe.models import Recipe


class Collection(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    recipe = models.ForeignKey(Recipe, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    description = models.CharField(max_length = 1000)
