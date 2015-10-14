from django.contrib import admin
from models import Band
from models import UserProfile

class BandAdmin(admin.ModelAdmin):
    list_display=('name',)
    search_feilds=('name')
admin.site.register(Band,BandAdmin)

class UserProfileAdmin(admin.ModelAdmin):
   list_display=('username',)
   search_feilds=('name')
admin.site.register(UserProfile,UserProfileAdmin)