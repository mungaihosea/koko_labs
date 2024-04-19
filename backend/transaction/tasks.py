from celery import shared_task
from datetime import timedelta
from .models import Transaction, RecurringTransaction
from django.utils import timezone



@shared_task
def execute_recurring_transactions():
    recurring_transactions = RecurringTransaction.objects.filter(next_execution_date__lte=timezone.now())
    for transaction in recurring_transactions:
        # Create a new transaction
        Transaction.objects.create(
            user=transaction.user,
            amount=transaction.amount,
            type=transaction.type,
            description=transaction.description
        )
        # Update next execution date based on frequency
        if transaction.frequency == 'Daily':
            transaction.next_execution_date += timedelta(days=1)
        elif transaction.frequency == 'Weekly':
            transaction.next_execution_date += timedelta(weeks=1)
        elif transaction.frequency == 'Monthly':
            transaction.next_execution_date += timedelta(days=30)
        elif transaction.frequency == 'Minute':
            transaction.next_execution_date += timedelta(minutes=1)
        # Add more conditions for other frequencies as needed
        transaction.save()

