from .serializers import TransactionSerializer, RecurringTransactionSerializer
from .models import Transaction, RecurringTransaction
from rest_framework import viewsets
from utils.pagination import StandardPaginator
from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import filters
from .tasks import execute_recurring_transactions
from django.utils import timezone
from datetime import timedelta



class TransactionViewSet(viewsets.ModelViewSet):
    queryset = Transaction.objects.all()
    serializer_class = TransactionSerializer
    pagination_class = StandardPaginator
    filter_backends = [DjangoFilterBackend, filters.SearchFilter]
    filterset_fields = ['user', 'type']     # Fields to filter by 
    search_fields = ['description']         # Database fields to search by



class RecurringTransactionViewSet(viewsets.ModelViewSet):
    queryset = RecurringTransaction.objects.all()
    serializer_class = RecurringTransactionSerializer
    pagination_class = StandardPaginator
    filter_backends = [DjangoFilterBackend, filters.SearchFilter]
    filterset_fields = ['user', 'type']     # Fields to filter by
    search_fields = ['description']         # Database fields to search by


