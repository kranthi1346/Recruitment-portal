
#Use an official node.js runtime as the base image
FROM node:20-alpine
# set the working directory in the container

#Set environment timezone
ENV TZ="Asia/Kolkata"


WORKDIR /app

#copy package.json and package-lock.json to the working directory
COPY package*.json ./

#Install npm dependencies
RUN npm install --production

#Copy the rest of the application code to the working directory
COPY .  .

#Expose the port on which node.js application will run 
EXPOSE 3000

#Command to run node.js application 
CMD ["node", "app.js"]
