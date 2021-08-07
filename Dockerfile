#take a based image
FROM node:16.4 as build 

#choose the working directory 
WORKDIR /app

#COPY all file we need 
COPY package*.json .

#Run our command

RUN npm install

#now copy all our files in the working directory

COPY . .

#Build our react project to get static files

RUN npm run build

#then we complete the first stage we must just to take our build folder and run in in a nginx web server

FROM nginx

COPY ./nginx/nginx.conf/ /etc/nginx/nginx.conf
COPY --from=build /app/build /user/share/nginx/html





