FROM nginx:latest

ENV PORT=80

RUN apt-get update


COPY config/docker/nginx.conf /etc/nginx/nginx.conf
COPY dist/ /var/www/html

EXPOSE ${PORT}





