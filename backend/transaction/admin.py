from django.contrib import admin
from .models import Transaction, RecurringTransaction

admin.site.register(Transaction)
admin.site.register(RecurringTransaction)
