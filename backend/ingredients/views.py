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