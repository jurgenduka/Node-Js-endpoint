# Use the official Debian image as the base image
FROM debian:bullseye-slim

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install Node.js and npm
RUN apt-get update && apt-get install -y \
    nodejs \
    npm

# Install project dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the TypeScript files
RUN npm run build

# Expose the port on which your application will run
EXPOSE 3000

# Command to run your application
CMD ["npm", "start"]
