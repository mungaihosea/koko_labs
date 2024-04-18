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

