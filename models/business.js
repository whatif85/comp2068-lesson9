// define a business class using Mongoose and make it public
var mongoose = require('mongoose');

// define the class using a mongoose schema
var businessSchema = new mongoose.Schema({
    title: {
        type: String,
        required: 'No title entered'
    },
    publisher: {
        type: String
    },
    genre: {
        type: String,
        required: 'No genre entered'
    },
    year: {
        type: Number,
        required: 'No year entered'
    }
});

// make the class definition public as "business"
module.exports = mongoose.model('business', businessSchema);
