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