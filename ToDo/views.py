from rest_framework.decorators import api_view
from .models import ToDo, Status
from .serializers import ToDoSerializer, StatusSerializer
from rest_framework.response import Response
from rest_framework import status

@api_view(['GET', 'POST'])
def todo_listAll_post(request):
  if request.method == 'GET':
    todo = ToDo.objects.all()
    serializer = ToDoSerializer(todo, many=True)

    return Response(serializer.data)
  
  else:
    serializer = ToDoSerializer(data=request.data)

    if serializer.is_valid():
      serializer.save()
      return Response(serializer.data, status=status.HTTP_201_CREATED)
    
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(["GET"])
def status_listAll(request):
  if request.method == "GET":
    status = Status.objects.all()
    serializer = StatusSerializer(status, many=True)

    return Response(serializer.data)

@api_view(['GET', 'PUT', 'DELETE'])
def todo_rOne_u_d(request, pk):
  try:
    todo = ToDo.objects.get(pk=pk)
  except ToDo.DoesNotExist:
    return Response(status=status.HTTP_400_BAD_REQUEST)
  
  if request.method == 'GET':
    serializer = ToDoSerializer(todo)
    return Response(serializer.data)
  
  elif request.method == 'PUT':
    print(request.data)
    serializer = ToDoSerializer(todo, data=request.data)
    if serializer.is_valid():
      serializer.save()
      return Response(serializer.data)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
  
  elif request.method == 'DELETE':
    todo.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)