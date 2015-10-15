from django.conf.urls import patterns, include, url
from rest_framework.urlpatterns import format_suffix_patterns
from band import views

urlpatterns = patterns('',
    # Examples:
    # url(r'^$', 'music.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),

      url(r'^$', 'band.views.all_users'),
      url(r'^(?P<user_id>\d+)/$', 'band.views.user'),
      url(r'^api/(?P<pk>[0-9]+)/$', views.UserDetail.as_view()),
       url(r'^user/new/$', views.user_new, name='user_new'),
      
)

urlpatterns = format_suffix_patterns(urlpatterns, allowed=['json', 'html'])
