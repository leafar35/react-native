FROM node:latest

# Install Java.
RUN apt-get install -y software-properties-common
# RUN add-apt-repository ppa:openjdk-r/ppa
RUN add-apt-repository -r ppa:gnome-shell-extensions/ppa
RUN echo 'deb http://ftp.debian.org/debian stretch-backports main' | tee /etc/apt/sources.list.d/stretch-backports.list
RUN apt-get update && apt-get install -y openjdk-11-jdk && apt install -y --no-install-recommends android-tools-adb

# Define commonly used JAVA_HOME variable
ENV JAVA_HOME /usr/lib/jvm/java-11-openjdk-amd64

# Install python
RUN apt-get install -y python

EXPOSE 3001

CMD [ "node", "adb" ]