from rest_framework import serializers

from .models import Recipe_Ingredients


class Recipe_IngredientsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recipe_Ingredients
        fields = ['recipe', 'ingredients']
        depth = 1

        recipe_id = serializers.IntegerField(write_only=True)
        ingredients_id = serializers.IntegerField(write_only=True)