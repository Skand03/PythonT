from django.shortcuts import render

from django.http import HttpResponse

def contact(request):
    return render(request, "contact.html")


def about(request):
    return render(request, "aboutus.html")

def footer(request):
    return render(request, "footer.html")

def design(request):
    return render(request, "design.html")

def threeDesign(request):
    return render(request, "threeDesign.html")


def home(request):
    return HttpResponse("This is home page")