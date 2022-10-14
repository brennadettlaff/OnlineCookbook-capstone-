from rest_framework import serializers

from .models import Notes


class NotesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Notes
        fields = ['id', 'user', 'recipe', 'text', 'recipe_id']
        depth = 1

        recipe_id = serializers.IntegerField(write_only=True)