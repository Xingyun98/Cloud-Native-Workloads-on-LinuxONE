var mongoose = require('mongoose');

// Define the schema
module.exports = mongoose.model('User', {
    user_ID: {
        type: String,
        default: '2333'
    },

    name: {
        type: String,
        default: ''
    },

    ContactMethod: {
        type: String,
        default: ''
    },

    Rank:{
    	type: Number,
    	Default:'0'
    }

});
