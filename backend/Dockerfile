FROM node:18
WORKDIR /backend
COPY package.json ./
RUN yarn
COPY . .
RUN yarn build
EXPOSE 8080
CMD ["yarn", "dev"]
