FROM node:alpine
WORKDIR /app
COPY . .
RUN npm install -g truffle@5.4.24
EXPOSE 3010
CMD ["truffle", "migrate"]