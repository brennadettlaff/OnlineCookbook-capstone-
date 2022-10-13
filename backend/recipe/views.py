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