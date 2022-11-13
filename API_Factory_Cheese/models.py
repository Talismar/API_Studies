from django.db import models

class Seller(models.Model):
  name = models.CharField("Vendedor", max_length=100)
  
  def __str__(self):
    return self.name

class ListSystem(models.Model):
  name = models.CharField("Nome da lista", max_length=100)
  seller = models.ForeignKey(Seller, on_delete=models.CASCADE)

  def __str__(self):
    return self.name

class Purchase(models.Model):
  name_list = models.ForeignKey(ListSystem, on_delete=models.CASCADE)
  amount_of_liters = models.DecimalField(max_digits=12, decimal_places=2)

  def __str__(self):
    return f'{self.amount_of_liters}'