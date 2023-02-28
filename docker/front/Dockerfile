FROM node:16.13.0-alpine3.12
ENV NODE_VERSION 16.14.2
WORKDIR /usr/src/ui
ADD ./ui/package*.json ./
RUN npm install
COPY ./ui /usr/src/ui
EXPOSE 3000
ENV CI=true 
CMD npm start