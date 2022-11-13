from rest_framework import serializers
from .models import ListSystem, Seller, Purchase

class PurchaseSerializer(serializers.ModelSerializer):
  class Meta:
    model = Purchase
    fields = "__all__"

class ListSystemSerializer(serializers.ModelSerializer):
  purchase_set = PurchaseSerializer(many=True)
  
  class Meta:
    model = ListSystem
    fields = ["name", 'purchase_set']

class SellerSerializer(serializers.ModelSerializer):
  listsystem_set = ListSystemSerializer(many=True)

  class Meta:
    model = Seller
    fields = ['name', 'listsystem_set']