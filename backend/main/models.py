from django.db import models
class Ranking(models.Model):
    usuario = models.CharField(max_length=20)
    tiempo = models.CharField(max_length=5)

    def __str__(self):
        return '{} - {}'.format(self.usuario, self.tiempo)
