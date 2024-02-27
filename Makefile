# Makefile for web deployment

all: PutHTML

PutHTML:
	cp multiplydivide.html /var/www/html/multiplydivide/
	cp multiplydivide.css /var/www/html/multiplydivide/
	cp multiplydivide.js /var/www/html/multiplydivide/

	echo "Current contents of your HTML directory: "
	ls -l /var/www/html/multiplydivide/
