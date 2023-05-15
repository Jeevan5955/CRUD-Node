# CRUD-Node and Deployment

#### Language : JavaScript
#### Framework : Express.js 
#### Run time environment : Node.js
#### Database : MongoDB

## Installation:

### Recommendation:

#### Installing NVM on Ubuntu:

##### Open a terminal on your system or connect a remote system using SSH. Use the following commands to install curl on your system, then run the nvm installer script.

```
sudo apt install curl 
```
```
curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash 
```
```
source ~/.bashrc 
```

#### Installing Node using NVM

##### Install the latest version of node.js
```
nvm install node 
```
##### To install a specific version of node
```
nvm install 18.16.0 
```

#### Add .env file with the below parameters:

```
APP_KEY="user-crud"
APP_ENV=development
APP_NAME=user

APP_PORT=9025
APP_DEBUG=true;

LOG_LEVEL=debug
LOG_FILE=app

DB_CONNECTION="****"
DB_DATABASE="****"
DB_HOST="****"
DB_USER="****"
DB_PASSWORD="****"

DATABASE="PROD"
```

#### How to run:

```
npm install
```
```
npm start
```


