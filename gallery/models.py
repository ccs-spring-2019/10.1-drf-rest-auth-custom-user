from django.db import models


# Create your models here.
class Gallery(models.Model):
    name: models.CharField(max_length=255)

    class Meta:
        verbose_name_plural = "Galleries"
