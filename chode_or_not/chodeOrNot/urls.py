__author__ = '2121159i'
from django.conf.urls import patterns, url
from chodeOrNot import views

urlpatterns = patterns('',
        url(r'^$', views.index, name='index'),
        url(r'^timer/',views.timer, name='timer'),
                       )