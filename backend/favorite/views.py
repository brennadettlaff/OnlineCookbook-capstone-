from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response

from .models import Favorite
from .serializers import FavoriteSerializer

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_favorites(request):
    if request.method == 'GET':
        recipe = Favorite.objects.filter(user_id=request.user.id)
        serializer = FavoriteSerializer(recipe, many=True)
        return Response(serializer.data)
