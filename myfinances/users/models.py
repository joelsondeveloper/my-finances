from django.db import models
from django.contrib.auth.models import AbstractUser
from django.db import models

class CustomUser(AbstractUser):
    nome = models.CharField(max_length=255)
    email = models.EmailField(unique=True)

    # Adicione mais campos conforme necessário

    def __str__(self):
        return self.username
