FROM alpine:3.5

RUN apk add --no-cache uwsgi uwsgi-http uwsgi-python uwsgi-corerouter py-flask

COPY ./app /app

EXPOSE 5000

ENTRYPOINT ["uwsgi", "--emperor", "/app"]



