# Use a node.js base image
FROM node:14

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Build the production version of the app
RUN npm run build
    
# Expose the port that the app will run on
EXPOSE 3000

# Set environment variable for production
ENV NODE_ENV=production

# Command to run the application
CMD ["npm", "run", "serve"]
