from .serializers import TransactionSerializer
from .models import Transaction
from rest_framework import viewsets
from utils.pagination import StandardPaginator
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import filters




class TransactionViewSet(viewsets.ModelViewSet):
    queryset = Transaction.objects.all()
    serializer_class = TransactionSerializer
    pagination_class = StandardPaginator
    filter_backends = [DjangoFilterBackend, filters.SearchFilter]
    filterset_fields = ['user'] 
    search_fields = ['description']  # Add fields for searching


