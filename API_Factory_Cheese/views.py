from rest_framework import viewsets
from .models import *

from .serializers import *

class PurchaseViewSet(viewsets.ModelViewSet):
  queryset = Purchase.objects.all()
  serializer_class = PurchaseSerializer

class ListSystemViewSet(viewsets.ModelViewSet):

  queryset = ListSystem.objects.all()
  serializer_class = ListSystemSerializer

class SellerViewSet(viewsets.ModelViewSet):

  queryset = Seller.objects.all()
  serializer_class = SellerSerializer