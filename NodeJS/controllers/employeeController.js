//Implementing the Router from Express 

const express = require('express');
var router = express.Router();
var ObjectId = require('mongoose').Types.ObjectId;

//Inside this we must actually play with the mongoose model which we created in employee.js
//Store the exported employee from employee.js -> employeeController.js
var { Employee } = require('../models/employee');


// THIS ONE IS TO FETCH THE RECORD
// Now in order to store all the collections in the database 
//In order to execute this request, we need to make a get request 
// Like this -> localhost:3000/employees/
router.get('/', (req,res) => {
    Employee.find((err, docs) => {
        if(!err) { res.send(docs);}
        else { console.log('Error in Retrieving Employees :' + JSON.stringify(err, undefined , 2)); }
    });
})

// THIS ONE IS TO SEARCH FOR A PARTICULAR RECORD 
router.get('/:id' , (req, res) => {
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Employee.findById(req.params.id, (err, doc) => {
        if(!err) { res.send(doc);}
        else { console.log('Error in Retrieving Employees :' + JSON.stringify(err, undefined , 2)); }    
    }); 
});

//THIS IS TO INSERT DATA INTO THE DATABASE 
router.post('/' , (req,res) => {
    //Here we have created an Employee of model class emp 
    // var emp = Employee({
    //     name: req.body.name,
    //     position: req.body.position, 
    //     office: req.body.office,
    //     salary: req.body.salary
    // });
    var emp = Employee({
        name: req.body.name,
        Category: "Category", 
        Followers: "1000",
        Personality_Trait: "Extrovert"
    });
    emp.save((err,doc) => {
        if(!err) { res.send(doc); }
        else { console.log('Error in Employee Save:' + JSON.stringify(err, undefined ,2)); }
    });  
});

// THIS IS TO PERFORM UPDATE OPERATION
router.put('/:id' , (req, res) => {
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    //During update we will send a json data containing new details 
    var emp = {
        name: req.body.name,
        position: req.body.position, 
        office: req.body.office,
        salary: req.body.salary
    };
    Employee.findByIdAndUpdate(req.params.id, { $set: emp}, { new: true}, (err, doc) => {
        if(!err) { res.send(doc); }
        else { console.log('Error in Employee Update:' + JSON.stringify(err, undefined ,2)); }         
    })
});



// THIS IS TO PERFORM DELETE OPERATION
router.delete('/:id' , (req, res) => {
    if(!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

    Employee.findByIdAndRemove(req.params.id, (err, doc) => {
        if(!err) { res.send(doc); }
        else { console.log('Error in Employee Delete:' + JSON.stringify (err, undefined ,2)); }         
    })
}); 


//Like this get request, we have to add few more routes inside this employeeController 
//So we have to configure this root files inside index.js for which we have to export the router object which we have created 
module.exports = router;

