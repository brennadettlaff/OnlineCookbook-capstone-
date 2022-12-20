from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from django.shortcuts import get_object_or_404
from django.shortcuts import get_list_or_404

from .models import Favorite
from .serializers import FavoriteSerializer

@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def get_users_favorites(request):
    if request.method == 'GET':
        favorite = Favorite.objects.filter(user_id=request.user.id)
        serializer = FavoriteSerializer(favorite, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = FavoriteSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user = request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def edit_favorite(request, pk):
    favorite = get_object_or_404(Favorite, pk=pk)
    if request.method == 'DELETE':
        favorite.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_favorite(request, recipe_id):
    if request.method == 'GET':
        user_favorites = Favorite.objects.filter(user_id=request.user.id)
        # favorite = get_list_or_404(user_favorites, recipe_id=recipe_id)
        favorite = user_favorites.filter(recipe_id=recipe_id)
        serializer = FavoriteSerializer(favorite, many=True)
        return Response(serializer.data)