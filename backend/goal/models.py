from django.db import models
from uuid import uuid4
from transaction.models import Transaction


class BaseModel(models.Model):
    id = models.CharField(max_length = 255, default = uuid4, primary_key=True, editable=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        abstract = True
        ordering = ['-created_at']



class Goal(BaseModel):
    user = models.CharField(max_length=255)
    current_amount = models.PositiveIntegerField()
    target_amount = models.PositiveIntegerField()
    acheived = models.BooleanField(default=False)
    cancelled = models.BooleanField(default=False)
    transactions = models.ManyToManyField(Transaction)
    
