from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response

from .models import Recipe_Ingredients
from .serializers import Recipe_IngredientsSerializer


@api_view(['GET'])
@permission_classes([AllowAny])
def ri_list(request):  
    if request.method == 'GET':
        recipe = Recipe_Ingredients.objects.all()
        serializer = Recipe_IngredientsSerializer(recipe, many=True)
        return Response(serializer.data)