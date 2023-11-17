# users/urls.py

from django.urls import path
from . import views
from .views import RegistroView

urlpatterns = [
    path('registro/', RegistroView.as_view(), name='registro'),
    path('login/', views.login, name='login'),
    path('perfil/', views.perfil, name='perfil'),
    # Adicione mais URLs conforme necessário
]
