//Creating the Model Employee

const mongoose = require('mongoose');

//By default mongoose will insert the  record into a collection named Employees(which is the plural of the given collection)
//Also there is no need to create the collection before itself mongoose will create the colletion if it is not there
var Employee = mongoose.model('Employee', {
    name: { type: String},
    Category: { type: String},
    Followers: { type: Number},
    Personality_Trait: { type: String}
});

module.exports = { Employee };
