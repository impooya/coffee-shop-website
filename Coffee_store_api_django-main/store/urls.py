from django.urls import path
from .views import CoffeeView

urlpatterns = [
    path("coffee/", CoffeeView.as_view()),
    path("coffee/<int:pk>/", CoffeeView.as_view()),
]
