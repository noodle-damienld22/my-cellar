FROM balenalib/raspberry-pi-alpine-node:14-3.15 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM balenalib/raspberry-pi-alpine-node:14-3.15 AS server
WORKDIR /app
COPY package* ./
RUN npm ci --production
COPY --from=builder ./app/public ./public
COPY --from=builder ./app/build ./build
EXPOSE 8080
CMD ["npm", "start"]