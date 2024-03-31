#los serializadores sirven para formatear los datos que van a la database, pasarlo de json a python y luego al formato especial de 
#django para manipular los datos


from rest_framework import serializers
from .models import Task

class TaskSerializer(serializers.ModelSerializer):
    class Meta:

        model = Task
        # fields = ('id', 'title', 'description', 'done')
        fields = '__all__' #<---esto sirve para seleccionar todos los campos del modelo/tabla