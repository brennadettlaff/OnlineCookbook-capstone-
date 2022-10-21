from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from django.shortcuts import get_object_or_404

from .models import Collection
from .serializers import CollectionSerializer

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_collections(request):
    if request.method == 'GET':
        collection = Collection.objects.filter(user_id=request.user.id)
        serializer = CollectionSerializer(collection, many=True)
        return Response(serializer.data)