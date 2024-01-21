from rest_framework import serializers

from main.models import Ranking


class RankingSerializer(serializers.HyperlinkedModelSerializer):

    class Meta:
        model = Ranking
        fields = ['usuario','tiempo']