from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response

from .models import Notes
from .serializers import NotesSerializer


@api_view(['GET'])
@permission_classes([AllowAny])
def notes_list(request, recipe_id):  
    if request.method == 'GET':
        recipe = Notes.objects.filter(recipe_id=recipe_id)
        serializer = NotesSerializer(recipe, many=True)
        return Response(serializer.data)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def add_note(request):
    if request.method == 'POST':
        serializer = NotesSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user = request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
@api_view(['PUT'])
@permission_classes([IsAuthenticated]) 
def edit_note(request, pk):
    recipe = get_object_or_404(Notes, pk=pk)
    if request.method == 'PUT':
        serializer = NotesSerializer(recipe, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)