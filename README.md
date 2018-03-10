# Taskwipe
## Dependencies
* [Node.js LTS version](https://nodejs.org/en/)

## Client
### Install Dependencies
In the src/client directory, run the following command: 
* `npm install`

This will install all of the dependencies listed in the package.json file.

### Build
In the src/client directory, run the following command:
* `npm run build`

### Run dev server
In the src/client directory, run the following command:
* `npm start`  

This will run the client dev server at http://localhost:3000.  

### Run unit tests
In the src/client directory, run the following command:
* `npm run test`  

## Web Server
### Install Dependencies
In the src directory, run the following command: 
* `npm install`

This will install all of the dependencies listed in the package.json file.

### Run the web server
In the src directory, run the following command:
* `PORT=3001 npm start`  or
* `PORT=3001 nodemon bin/www` to automatically restart the server when there is a modification

This will run the web server at http://localhost:3001.
