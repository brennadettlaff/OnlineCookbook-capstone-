from django.db import models
from authentication.models import User
from recipe.models import Recipe

class Favorite(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    recipe = models.ForeignKey(Recipe, on_delete=models.CASCADE)
    fav_toggle = models.BooleanField(default=False)