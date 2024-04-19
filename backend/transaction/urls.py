from .views import TransactionViewSet, RecurringTransactionViewSet
from rest_framework.routers import DefaultRouter


router = DefaultRouter(trailing_slash = False)
router.register('transactions', TransactionViewSet)
router.register('recurring_transactions', RecurringTransactionViewSet)
urlpatterns = router.urls
