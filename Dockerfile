FROM tiangolo/uwsgi-nginx-flask:flask-python3.5-index


COPY ./nginx.conf /etc/nginx/conf.d/

COPY ./src/api /app
COPY ./src/web/src /app/static/

