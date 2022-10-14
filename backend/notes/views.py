from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response

from .models import Notes
from .serializers import NotesSerializer


@api_view(['GET'])
@permission_classes([AllowAny])
def notes_list(request):  
    if request.method == 'GET':
        recipe = Notes.objects.all()
        serializer = NotesSerializer(recipe, many=True)
        return Response(serializer.data)