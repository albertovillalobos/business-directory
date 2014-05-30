'use strict';


var mongoose = require('mongoose'),
    Schema = mongoose.Schema;


/* 
   Think of this as a JAVA class 
========================================================================== */
var CompanyModel = new Schema({
	name: String,
	description: String,
	industry: String,
	logo: String,
	address: String,
	telephone: Number
});

// Later on
module.exports = mongoose.model('Company', CompanyModel);