from rest_framework import serializers

from .models import Collection


class CollectionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Collection
        fields = ['id', 'user', 'recipe', 'name', 'description']
        depth = 1

        recipe_id = serializers.IntegerField(write_only=True)