FROM alpine:3.5

ENV http_proxy=http://forward.d01.blkb.ch:3128
ENV https_proxy=http://forward.d01.blkb.ch:3128

RUN apk add --no-cache uwsgi uwsgi-http uwsgi-python uwsgi-corerouter py-flask

COPY ./app /app

EXPOSE 5000

ENTRYPOINT ["uwsgi", "--emperor", "/app"]



