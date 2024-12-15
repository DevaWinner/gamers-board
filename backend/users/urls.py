from django.urls import path
from .views import CurrentUserView

urlpatterns = [
    path('current/', CurrentUserView.as_view(), name='current-user')
]
