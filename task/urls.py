from django.urls import path, include
from task import views
from rest_framework import routers #<---esto me generea las rutas para todas las vistas creadas desde task.views
from rest_framework.documentation import include_docs_urls


router = routers.DefaultRouter()
router.register(r'tasks', views.TaskView, 'tasks')

urlpatterns = [
    path('api/v1/', include(router.urls)),
    path('docs/', include_docs_urls(title="Task api")),
]
