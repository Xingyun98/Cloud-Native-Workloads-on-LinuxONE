var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var userSchema = new Schema({
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
    	default:Date.now()
    }

});


// 将数据模型暴露出去
module.exports = mongoose.model('user',userSchema);
