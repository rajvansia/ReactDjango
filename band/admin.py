from django.contrib import admin
from models import Band
from models import UserProfile
from models import Parent
from models import Family

class BandAdmin(admin.ModelAdmin):
    list_display=('name',)
    search_feilds=('name')
admin.site.register(Band,BandAdmin)

class UserProfileAdmin(admin.ModelAdmin):
   list_display=('username',)
   search_feilds=('name')
admin.site.register(UserProfile,UserProfileAdmin)

class ParentAdmin(admin.ModelAdmin):
  list_display=('id',)
  search_feilds=('name')
admin.site.register(Parent,ParentAdmin)

class FamilyAdmin(admin.ModelAdmin):
  list_display=('id',)
  search_feilds=('name')
admin.site.register(Family,FamilyAdmin)