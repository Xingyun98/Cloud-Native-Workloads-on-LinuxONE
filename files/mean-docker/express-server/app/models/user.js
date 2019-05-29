var mongoose = require('mongoose');

module.exports = mongoose.model('user',{
	user_ID: {
        type: String,
        default: ''
    },

    user_PWD:{
        type: String,
        default:''
    },

    name: {
        type: String,
        default: '666'
    },

    ContactMethod: {
        type: String,
        default: ''
    },

    Rank:{
    	type: Number,
    	Default:'0'
    },

    bonus:{
        type:Number,
        default:'10'
    },

    createAT:{
    	type:Date,
    	default:''
    }

});




