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

For testing front-end you need to have globaly install  [Test'em](https://github.com/testem/testem), run the following command:


```bash
npm install testem -g
```
Notice you may need sudo for installing globaly.

And then run the following command in the project directory to run tests:

```bash
testem
```
