from django.urls import path
from .views import *

urlpatterns = [
    path('', todo_listAll_post),
    path('<int:pk>/', todo_rOne_u_d),
    path('status/', status_listAll)
]
