FROM node:latest

# ADD ~/usr/lib/jvm/* /usr/lib/jvm/
# RUN cp /usr/lib/jvm/* /usr/lib/jvm/
# RUN cp ./home/rafael/Android/Sdk/ /Android/Sdk/

# Define commonly used JAVA_HOME variable
# ENV JAVA_HOME /usr/lib/jvm/java-11-openjdk-amd64

# ENV ANDROID_HOME=~/Android/Sdk
# ENV PATH=$PATH:$ANDROID_HOME/tools 
# ENV PATH=$PATH:$ANDROID_HOME/platform-tools

# Install expo
RUN npm i -g expo-cli

# Install python
RUN apt-get install -y python

EXPOSE 3001

CMD [ "node" ]