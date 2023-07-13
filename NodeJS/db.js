const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/CrudDB', (err) => {
    //If database connection is succeded print this message in the connection windows
    //If not then print the error by converting the error which is thrown to string datatype
    //If so error JSON.stringify converts the JS object to JSON String
    //In case any error in DB connection print this error message in db connection with detailed error object
    if(!err)
        console.log('MongoDB Connection Succeeded...');
    else    
        console.log('Error in DB Connection: ' + JSON.stringify(err, undefined, 2));
}); 

module.exports = mongoose;



