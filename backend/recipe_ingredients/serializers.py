from rest_framework import serializers

from .models import Recipe_Ingredients


class Recipe_IngredientsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recipe_Ingredients
        fields = ['id', 'recipe', 'ingredients', 'recipe_id', 'ingredients_id']
        depth = 1

    recipe_id = serializers.IntegerField(write_only=True)
    ingredients_id = serializers.IntegerField(write_only=True)