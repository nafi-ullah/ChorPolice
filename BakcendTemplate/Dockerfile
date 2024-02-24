FROM node:20-alpine

WORKDIR /app

COPY package.json .
RUN npm install
COPY . .
EXPOSE 3001
CMD ["npm","start"]

# FROM node:18.19.0-bookworm-slim

# WORKDIR /app

# COPY . .

# RUN bash -c "npm install"

# EXPOSE 3001

# CMD ["npm", "start"]