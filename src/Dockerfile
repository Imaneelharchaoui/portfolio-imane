# This file is the main docker file configurations


FROM node:10.16.0-alpine

# Set the working directory to ./app
WORKDIR /public

# Install app dependencies

COPY package.json ./

RUN apk add --no-cache git

# Install any needed packages
RUN npm install

# Audit fix npm packages
RUN npm audit fix

# Bundle app source
COPY . /app

# Make port 3000 available to the world outside this container
EXPOSE 3000

# Run app.js when the container launches
CMD ["npm", "start"]
