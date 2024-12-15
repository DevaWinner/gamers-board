from django.contrib import admin
from django.http import HttpResponse
from django.urls import path, include
from django.views.decorators.csrf import ensure_csrf_cookie

@ensure_csrf_cookie
def set_csrf_token(request):
    return HttpResponse("CSRF cookie set")

urlpatterns = [
    path('admin/', admin.site.urls),
    path('accounts/', include('allauth.urls')),
    path('auth/', include('dj_rest_auth.urls')),
    path('auth/registration/', include('dj_rest_auth.registration.urls')),
    path('api/', include('forum.urls')),
    path('api/users/', include('users.urls')),

    path('set-csrf/', set_csrf_token),
]
