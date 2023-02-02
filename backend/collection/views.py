from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from django.shortcuts import get_object_or_404

from .models import Collection
from .serializers import CollectionSerializer

@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def get_collections(request):
    if request.method == 'GET':
        collection = Collection.objects.filter(user_id=request.user.id)
        serializer = CollectionSerializer(collection, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = CollectionSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user = request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
@api_view(['GET'])
@permission_classes([AllowAny])
def collection_details(request, pk):  
    if request.method == 'GET':
        collection = Collection.objects.filter(pk=pk)
        serializer = CollectionSerializer(collection, many=True)
        return Response(serializer.data)   



@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def edit_collection(request, pk):
    collection = get_object_or_404(Collection, pk=pk)
    if request.method == 'PUT':
        serializer = CollectionSerializer(collection, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)