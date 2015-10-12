from django.conf.urls import patterns, include, url
from django.contrib import admin

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'music.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

      url(r'^$', 'band.views.all_bands'),
      url(r'(?P<band_id>\d+)/$', 'band.views.band'),

)