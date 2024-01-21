from django.shortcuts import render
from rest_framework import viewsets

from main.models import Ranking
from main.serializers import RankingSerializer


# Create your views here.
class RankingViewSet(viewsets.ModelViewSet):

    queryset = Ranking.objects.all()
    serializer_class = RankingSerializer

    def get_queryset(self):
        orden = ['tiempo']
        return Ranking.objects.order_by(*orden)[:10]