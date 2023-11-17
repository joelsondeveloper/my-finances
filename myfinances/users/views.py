# users/views.py

from django.shortcuts import render
from django.views import View

class RegistroView(View):
    def get(self, request, *args, **kwargs):
        return render(request, 'users/registro_template.html')

def login(request):
    # Lógica para a visualização de login
    return render(request, 'login.html')

def perfil(request):
    # Lógica para a visualização de perfil
    return render(request, 'perfil.html')
