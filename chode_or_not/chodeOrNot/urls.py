__author__ = '2121159i'
from django.conf.urls import patterns, url
from chodeOrNot import views

urlpatterns = patterns('',
        url(r'^$', views.index, name='index'),
        url(r'^timer/',views.timer, name='timer'),
        url(r'^timeup/',views.timeup, name='timeup'),
        url(r'^success/',views.success, name='success'),
        url(r'^fail/',views.fail, name='fail'),
        url(r'^terms/',views.terms, name='terms'),
        url(r'^howitworks/',views.howitworks, name='howitworks'),
                       )
