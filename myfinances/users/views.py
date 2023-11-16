# users/views.py

from django.shortcuts import render

def registro(request):
    # Lógica para a visualização de registro
    return render(request, 'registro.html')

def login(request):
    # Lógica para a visualização de login
    return render(request, 'login.html')

def perfil(request):
    # Lógica para a visualização de perfil
    return render(request, 'perfil.html')
