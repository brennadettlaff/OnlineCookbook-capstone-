from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response

from .models import Ingredients
from .serializers import IngredientsSerializer


@api_view(['GET'])
@permission_classes([AllowAny])
def ingredients_list(request):  
    if request.method == 'GET':
        recipe = Ingredients.objects.all()
        serializer = IngredientsSerializer(recipe, many=True)
        return Response(serializer.data)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def add_ingredient(request):
    if request.method == 'POST':
        serializer = IngredientsSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user = request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def edit_ingredient(request, pk):
    recipe = get_object_or_404(Ingredients, pk=pk)
    if request.method == 'PUT':
        serializer = IngredientsSerializer(recipe, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)