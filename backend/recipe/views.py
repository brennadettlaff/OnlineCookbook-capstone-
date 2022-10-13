from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response

from .models import Recipe
from .serializers import RecipeSerializer


@api_view(['GET'])
@permission_classes([AllowAny])
def recipe_list(request):  
    if request.method == 'GET':
        recipe = Recipe.objects.all()
        serializer = RecipeSerializer(recipe, many=True)
        return Response(serializer.data)

@api_view(['POST', 'GET'])
@permission_classes([IsAuthenticated])
def user_recipe(request):
    if request.method == 'POST':
        serializer = RecipeSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user = request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    elif request.method == 'GET':
        recipe = Recipe.objects.filter(user_id=request.user.id)
        serializer = RecipeSerializer(recipe, many=True)
        return Response(serializer.data)