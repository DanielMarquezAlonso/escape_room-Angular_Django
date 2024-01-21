from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView
from rest_framework import routers

from main import views

router = routers.DefaultRouter()
router.register(r'ranking', views.RankingViewSet, basename='ranking')

urlpatterns = router

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework')),
]
