# Dockerfile

# base image
FROM node:14-buster-slim

# create & set working directory
RUN mkdir -p /usr/src
WORKDIR /usr/src
VOLUME /db

# copy source files
COPY . /usr/src

# install dependencies
RUN npm install

# start app
RUN npm run build
EXPOSE 3000
CMD npm run start