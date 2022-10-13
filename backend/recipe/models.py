from authentication.models import User
from django.db import models


class Recipe(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    description = models.CharField(max_length = 300)
    time = models.CharField(max_length = 100)
    instructions = models.CharField(max_length = 10000)