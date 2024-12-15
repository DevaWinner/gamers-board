# forum/serializers.py
from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Topic, Post

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username']

class PostSerializer(serializers.ModelSerializer):
    created_by = UserSerializer(read_only=True)
    topic = serializers.PrimaryKeyRelatedField(queryset=Topic.objects.all())

    class Meta:
        model = Post
        fields = ['id', 'content', 'created_by', 'created_at', 'topic']

class TopicSerializer(serializers.ModelSerializer):
    created_by = UserSerializer(read_only=True)
    posts = PostSerializer(many=True, read_only=True)

    class Meta:
        model = Topic
        fields = ['id', 'title', 'created_by', 'created_at', 'posts']
