from rest_framework.routers import DefaultRouter
from .views import GoalViewSet

router = DefaultRouter(trailing_slash = False)
router.register('goals', GoalViewSet)
urlpatterns = router.urls