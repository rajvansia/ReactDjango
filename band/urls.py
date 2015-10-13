from django.conf.urls import patterns, include, url
from django.contrib import admin
from rest_framework.urlpatterns import format_suffix_patterns
from band import views
urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'music.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

      url(r'^$', 'band.views.all_bands'),
      url(r'^(?P<band_id>\d+)/$', 'band.views.band'),
      url(r'^api/(?P<pk>\d+)/$', views.BandDetail.as_view()),
)

urlpatterns=format_suffix_patterns(urlpatterns)
