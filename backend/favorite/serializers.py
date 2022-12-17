from rest_framework import serializers

from .models import Favorite

class FavoriteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Favorite
        fields = ['id', 'user', 'recipe', 'recipe_id', 'fav_toggle']
        depth = 1

    recipe_id = serializers.IntegerField(write_only=True)