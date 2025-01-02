FROM ubuntu:23.10

RUN apt-get update && \
    apt-get -y install cron software-properties-common wget

RUN wget https://github.com/yt-dlp/yt-dlp/releases/latest/download/yt-dlp -O /usr/bin/yt-dlp && chmod a+rx /usr/bin/yt-dlp

COPY cron /etc/cron.weekly/cron

CMD cron -f
