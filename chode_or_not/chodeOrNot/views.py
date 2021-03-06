from django.shortcuts import render
from django.http import HttpResponse
from django.shortcuts import render
from time import time

# Create your views here.


def index(request):
    # Construct a dictionary to pass to the template engine as its context.
    # Note the key boldmessage is the same as {{ boldmessage }} in the template!

    context_dict = {'boldmessage': "I am bold font from the context"}

    # Return a rendered response to send to the client.
    # We make use of the shortcut function to make our lives easier.
    # Note that the first parameter is the template we wish to use.
    return render(request, 'ChodeOrNot/index.html', context_dict)


def timer(request):
    context_dict = {}
    return render(request, 'ChodeOrNot/timer.html', context_dict)

def timeup(request):
    context_dict = {}
    return render(request, 'ChodeOrNot/timeup.html', context_dict)


def success(request):
    context_dict = {}
    return render(request, 'ChodeOrNot/success.html', context_dict)


def fail(request):
    context_dict = {}
    return render(request, 'ChodeOrNot/fail.html', context_dict)

def terms(request):
    context_dict = {}
    return render(request, 'ChodeOrNot/terms_and_conditions.html', context_dict)

def howitworks(request):
    context_dict = {}
    return render(request, 'ChodeOrNot/howitworks.html', context_dict)
