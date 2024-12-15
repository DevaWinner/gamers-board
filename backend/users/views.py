from rest_framework.response import Response
from rest_framework.views import APIView
from forum.serializers import UserSerializer

class CurrentUserView(APIView):
    def get(self, request):
        if request.user.is_authenticated:
            serializer = UserSerializer(request.user)
            return Response(serializer.data)
        return Response({'detail': 'Not logged in'}, status=401)
