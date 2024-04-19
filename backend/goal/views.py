from django.shortcuts import render
from .serializers import GoalSerializer
from .models import Goal
from rest_framework import viewsets
from utils.pagination import StandardPaginator
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import filters



class GoalViewSet(viewsets.ModelViewSet):
    queryset = Goal.objects.all()
    serializer_class = GoalSerializer
    pagination_class = StandardPaginator
    filter_backends = [DjangoFilterBackend, filters.SearchFilter]
    filterset_fields = ['user', 'achieved', 'cancelled', 'dismissed']     # Fields to filter by 
    search_fields = ['description']         # Database fields to search by
