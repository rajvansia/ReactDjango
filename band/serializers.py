from rest_framework import serializers
from models import Band
from models import UserProfile
class BandSerializer(serializers.ModelSerializer):
    class Meta:
        model=Band


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model=UserProfile