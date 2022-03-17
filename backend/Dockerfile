FROM node:14.17.5-alpine3.14
COPY . .
RUN npm install
RUN npm build
EXPOSE 3005
CMD ["npm", "start"]