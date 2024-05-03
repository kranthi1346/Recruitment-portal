FROM node:lts

# Set the working directory
WORKDIR /app

# Copy the rest of the application
COPY . .

# Copy package.json and package-lock.json
# COPY package*.json ./

# Install dependencies
# RUN npm cache clean --force
RUN npm install --force
# RUN npm install @sentry/nextjs --legacy-peer-deps 
# RUN npm install -D @swc/cli @swc/core --legacy-peer-deps 
RUN npm install next -g
# RUN npm run build

# Expose the port
EXPOSE 3000

# Start the application
CMD ["NODE_ENV=development", "npm", "start"]
