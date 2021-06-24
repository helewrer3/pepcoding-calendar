# Pepcoding Intern Assignment
Classroom scheduler application where an admin can schedule different batches for different teachers.

### The webapp has now been deployed on [Heroku](https://pep-calendar.herokuapp.com/) and [Clever Cloud](http://app-06e436df-c9ab-4807-bd48-e728b92a32d2.cleverapps.io/)

## Technologies Used
+ NodeJS
+ Express
+ SQLite3 (for local deployment)
+ PostgreSQL (for heroku deployment)
+ MySQL (for clever cloud deployment)
+ Sequelize
+ HTML, CSS, Javascript

## Usage
### [Tutorial video](https://youtu.be/KXyLEp8zT2E)
### [DB Design](https://dbdiagram.io/d/60d2f068dd6a5971481b7761)


## Deploying Locally
Since the DBMS used is SQLite, you don't need to set up a server. \
Simply clone the repo locally and run the following commands at the root of the project - 
```
  npm install
  npm start
```
Log into the port number 5000 or whatever port number you have set as your environment variable of node.

### Dependencies
To run this app locally, you need to have [NodeJS](https://nodejs.org/en/) installed in your system.

### Disclaimer
+ Sequelize will drop all tables everytime server is restarted, it's intentional and can be turned off during local deployment via ```app.js``` file
