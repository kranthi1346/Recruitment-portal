FROM node:20-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install
RUN npm install next -g

# Copy the rest of the application
COPY . .

# Expose the port
EXPOSE 80

# Start the application
CMD ["npm", "start"]
