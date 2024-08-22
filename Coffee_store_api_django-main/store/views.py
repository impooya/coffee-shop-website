from django.shortcuts import render
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response
from .serializers import CoffeeSerializer
from .models import Coffee

# Create your views here.


# class CoffeeView(APIView):
#     def get(self, request):
#         coffees = Coffee.objects.all()
#         serializer = CoffeeSerializer(coffees, many=True)
#         return Response(serializer.data)

#     def post(self, request):
#         serializer = CoffeeSerializer(data=request.data)
#         serializer.is_valid(raise_exception=True)
#         serializer.save()
#         return Response(serializer.data)


class CoffeeView(generics.ListCreateAPIView):
    queryset = Coffee.objects.all()
    serializer_class = CoffeeSerializer


class CoffeeDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Coffee.objects.all()
    serializer_class = CoffeeSerializer

