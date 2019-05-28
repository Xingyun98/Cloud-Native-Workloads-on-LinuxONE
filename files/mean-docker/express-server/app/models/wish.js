var mongoose = require('mongoose');

//Define the schema
module.exports=mongoose.module('wish',{
	Wish_ID:{
		type:String,
		default:''
	},
	description:{
		type:String,
		default:''
	},

	publish_date:{
		type:String,
		default:''
	},

	DDL:{
		type:String,
		default:''
	},
	
	bonus:{
		type:Number,
		default:'0'
	}
});