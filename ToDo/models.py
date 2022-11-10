from django.db import models

class Status(models.Model):
  name = models.CharField(max_length=120)

  def __str__(self):
    return self.name

class ToDo(models.Model):

  status = models.ForeignKey(Status, on_delete=models.CASCADE)
  title = models.CharField(max_length=100)
  description = models.TextField()
  created_at = models.DateTimeField(auto_now_add=True)

  def __str__(self):
    return self.title
