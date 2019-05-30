var mongoose = require('mongoose');

// Define the schema
module.exports = mongoose.model('Wish', {
    user_name: {
        type: String,
        default: ''
    },

    get_by_user: {
        type: string,
        default: ''
    },
    title: {
        type: String,
        default: ''
    },

    description: {
        type: String,
        default: ''
    },

    publish_date: {
        type: Date,
        default: Date.now()
    },

    bonus: {
        type: Number,
        default: ''
    },
    
    isGet: {
        type: Boolean,
        default: false
    },

    isFinished: {
        type: Boolean,
        default: false
    }
});