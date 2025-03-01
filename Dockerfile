FROM node:18

# creating app dir inside of container and making it the working dir
WORKDIR /app

# setting up node as production environment (to have node know its prod)
ENV NODE_ENV=production

# put package & package-lock in the working dir
COPY package*.json /

RUN npm install

# copying everything from current directory to working directory (left dot -> this dir, right dot -> working dir or container)
COPY . .

# installs pm2 library globally inside the container
# pm2 good library to run app on prod -> run again when crashed cause of pm2
RUN npm install -g pm2

# expose port 3000
EXPOSE 3000

CMD ["pm2-runtime", "index.js"]
