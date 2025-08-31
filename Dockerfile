# Étape 1 : Builder l'application React
FROM node:18-alpine AS build

WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install

COPY . .
RUN npm run build

# Étape 2 : Serveur pour production
FROM nginx:stable-alpine

# Copier le build React vers Nginx
COPY --from=build /app/build /usr/share/nginx/html

# Copier la configuration Nginx personnalisée si nécessaire
# COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
