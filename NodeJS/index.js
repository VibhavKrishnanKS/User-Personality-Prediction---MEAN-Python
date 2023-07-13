//This is the router code  

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const { mongoose } = require('./db.js');
var employeeController = require('./controllers/employeeController.js');

//In order to work with this express we have to call this core function express
var app = express();
//Configuring our express middleware in order o send JSON data this node.js project
app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:4200' }));

app.listen(3000, () => console.log('Server started at port : 3000')); 

  
app.use('/employees', employeeController);
