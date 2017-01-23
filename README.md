[![Build Status](https://travis-ci.org/karliatto/blog-manager.svg?branch=master)](https://travis-ci.org/karliatto/blog-manager)
[![Status of Dependencies](https://david-dm.org/karliatto/blog-manager.svg)](https://david-dm.org/karliatto/blog-manager)

# Blog Manager

A simple JavaScript application managing blog posts.


## Requirements


You will first need to have the following dependencies installed before you can work on this project:
* [Node.js](https://nodejs.org/en/) - you can use either version (LTS or latest)
* [MySQL](http://www.mysql.com/)


## Database Setup

Once you have MySQL installed, you will need to setup the local database. Run the following SQL queries to create the database and user:

```sql
CREATE DATABASE IF NOT EXISTS blog;

GRANT USAGE ON * . * TO  'blog'@'localhost' IDENTIFIED BY  'password' WITH MAX_QUERIES_PER_HOUR 0 MAX_CONNECTIONS_PER_HOUR 0 MAX_UPDATES_PER_HOUR 0 MAX_USER_CONNECTIONS 0 ;


GRANT ALL PRIVILEGES ON  `blog` . * TO  'blog'@'localhost';
```


## Install Node Modules

Before you can run the server application, you will need to install the node module dependencies for the project. From inside the project directory, run the following command:
```bash
npm install
```

## Start the Application

Now that you have all the dependencies required, you can run the app:
```bash
npm start
```
If everything is OK, then you should see the following:
```
Our app is running on port 3000
```


## Testing front-end

For testing front-end I am using [Test'em](https://github.com/testem/testem) and it needs to run on a browser for testing front-end code.
First you need to find out the browsers available on your system, for this purpose, run the following command:
```bash
./node_modules/testem/testem.js launchers
```

And then run it on the browser you wish, bellow ther is an example for Firefox.

```bash
./node_modules/testem/testem.js -l Firefox ci
```


## More testing

For testing the rest of the code syntax and server side run the following command:

```bash
npm test
```
