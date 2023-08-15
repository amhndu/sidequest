FROM ubuntu:23.10

RUN apt-get update && \
    apt-get -y install cron software-properties-common

RUN add-apt-repository ppa:tomtomtom/yt-dlp && \
    apt-get -y install yt-dlp

COPY cron /etc/cron.daily/cron

RUN touch /var/log/cron.log
CMD cron && tail -f /var/log/cron.log
