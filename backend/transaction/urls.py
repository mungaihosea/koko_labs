from .views import TransactionViewSet
from rest_framework.routers import DefaultRouter


router = DefaultRouter(trailing_slash = False)
router.register('transactions', TransactionViewSet)
urlpatterns = router.urls
