from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response

from .models import Recipe_Collection
from .serializers import Recipe_CollectionSerializer


@api_view(['GET'])
@permission_classes([AllowAny])
def collection_list(request, collection_id):  
    if request.method == 'GET':
        collection = Recipe_Collection.objects.filter(collection_id=collection_id)
        serializer = Recipe_CollectionSerializer(collection, many=True)
        return Response(serializer.data)
    
    
@api_view(['POST'])
@permission_classes([AllowAny])
def add_junction(request):
    if request.method == 'POST':
        serializer = Recipe_CollectionSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
@api_view(['DELETE'])
@permission_classes([IsAuthenticated])
def edit_recipe_collection(request, pk):
    recipe_collection = get_object_or_404(Recipe_Collection, pk=pk)
    if request.method == 'DELETE':
        recipe_collection.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
