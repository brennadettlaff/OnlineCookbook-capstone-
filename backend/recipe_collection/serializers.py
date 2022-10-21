from rest_framework import serializers

from .models import Recipe_Collection


class Recipe_CollectionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Recipe_Collection
        fields = ['id',  'recipe', 'collection', 'recipe_id', 'collection_id']
        depth = 1

    recipe_id = serializers.IntegerField(write_only=True)
    collection_id = serializers.IntegerField(write_only=True)