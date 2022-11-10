from .models import ToDo, Status

from rest_framework import serializers

class ToDoSerializer(serializers.ModelSerializer):
  
  class Meta:
    model = ToDo
    fields = ['id', 'status', 'title', 'description']

class StatusSerializer(serializers.ModelSerializer):
  todo_set = ToDoSerializer(many=True)
  
  class Meta:
    model = Status
    fields = ['id', 'name', 'todo_set']