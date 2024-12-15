# forum/views.py
from rest_framework import viewsets
from django.utils import timezone
from rest_framework.permissions import IsAuthenticatedOrReadOnly
from .models import Topic, Post
from .serializers import TopicSerializer, PostSerializer

class TopicViewSet(viewsets.ModelViewSet):
    queryset = Topic.objects.all().order_by('-created_at')
    serializer_class = TopicSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]

    def perform_create(self, serializer):
        serializer.save(created_by=self.request.user, created_at=timezone.now())

class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all().order_by('created_at')
    serializer_class = PostSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]

    def perform_create(self, serializer):
        serializer.save(created_by=self.request.user, created_at=timezone.now())
