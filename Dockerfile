# # By Meer Sawood <msawood@redhat.com> 
# # uses ubi minimal image to build and httpd as the server

# # Use an official Red Hat UBI minimal runtime as a parent image
# FROM registry.access.redhat.com/ubi8/nodejs-18:1-102

# # Set the working directory to /app
# WORKDIR /app
# USER 0


# # Copy the current directory contents into the container at /app
# COPY . /app

# # Install dependencies
# RUN npm install
# RUN npm install pm2@latest -g

# RUN chown -R 1001:0 /app
# USER 1001

# RUN npm run build

# # Expose the server on port 80
# EXPOSE 8003

# # Start Server
# # Set the command to run the app
# ENTRYPOINT [ "/app/hack/entrypoint.sh" ]
# CMD [ "sh" ]

# Use the official Node.js 20 image as a base image
FROM node:20

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Next.js application
RUN npm run build

# Expose port 3000 to the outside world
EXPOSE 8003

# Command to run the application
CMD ["npm", "start"]

