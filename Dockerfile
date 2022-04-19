#Creates a layer from node:alpine image.
FROM node:alpine

#Creates directories
RUN mkdir -p /app

#Sets an environment variable
ENV PORT 80

#Sets the working directory for any RUN, CMD, ENTRYPOINT, COPY, and ADD commands
WORKDIR /app

#Copy new files or directories into the filesystem of the container
COPY package.json /app
COPY package-lock.json /app

#Execute commands in a new layer on top of the current image and commit the results
RUN npm install

##Copy new files or directories into the filesystem of the container
COPY . /app

#Execute commands in a new layer on top of the current image and commit the results
RUN npm run build

#Informs container runtime that the container listens on the specified network ports at runtime
EXPOSE 80

#Allows you to configure a container that will run as an executable
ENTRYPOINT ["npm", "start"]
