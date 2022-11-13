from django.urls import path, include
from rest_framework import routers
from .views import *

router = routers.DefaultRouter()
router.register(r'SystemList', ListSystemViewSet)
router.register(r'SellerList', SellerViewSet)
router.register(r'purchase', PurchaseViewSet)

urlpatterns = [
    path('', include(router.urls))
]
