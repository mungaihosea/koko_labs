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


    # def perform_create(self, serializer):
    #     instance = serializer.save()
    #     if instance.recurring:
    #         # Schedule the recurring transaction task
    #         frequency = instance.frequency  # Assuming frequency is part of the instance
    #         if frequency == 'Daily':
    #             execute_recurring_transactions.apply_async(eta=timezone.now() + timedelta(days=1))
    #         elif frequency == 'Weekly':
    #             execute_recurring_transactions.apply_async(eta=timezone.now() + timedelta(weeks=1))
    #         elif frequency == 'Monthly':
    #             execute_recurring_transactions.apply_async(eta=timezone.now() + timedelta(days=30))
    #         elif frequency == 'Minute':
    #             execute_recurring_transactions.apply_async(eta=timezone.now() + timedelta(minutes=1))
    #         # Add more conditions for other frequencies as needed