FROM node:lts-alpine as builder
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install & npm install @angular/cli -g & wait
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /usr/src/app/dist/frontend  usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
