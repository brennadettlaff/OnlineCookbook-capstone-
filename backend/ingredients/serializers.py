from rest_framework import serializers

from .models import Ingredients


class IngredientsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Ingredients
        fields = ['id', 'user', 'name', 'recipe', 'recipe_id']
        depth = 1
        
    recipe_id = serializers.IntegerField(write_only=True)