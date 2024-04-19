from django.db import models
from uuid import uuid4


class BaseModel(models.Model):
    id = models.CharField(max_length = 255, default = uuid4, primary_key=True, editable=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        abstract = True


class Transaction(BaseModel):
    user = models.CharField(max_length=255)
    amount = models.PositiveIntegerField()
    type = models.CharField(max_length=255, choices=(
        ('savings', 'savings'),
        ('expense', 'expense'),
        ('income', 'income')
    ))
    description = models.TextField(null = True, blank = True)
    class Meta:
        ordering = ['-created_at']



class RecurringTransaction(BaseModel):
    user = models.CharField(max_length=255)
    amount = models.PositiveIntegerField()
    type = models.CharField(max_length=255, choices=(
        ('savings', 'savings'),
        ('expense', 'expense'),
        ('income', 'income')
    ))
    description = models.TextField(null=True, blank=True)
    frequency = models.CharField(max_length=50, choices=(
        ('Daily', 'Daily'),
        ('Weekly', 'Weekly'),
        ('Monthly', 'Monthly'),
        ('Minute', 'Minute')
    ))  # Daily, Weekly, Monthly, etc.
    next_execution_date = models.DateTimeField(auto_now_add=True)
