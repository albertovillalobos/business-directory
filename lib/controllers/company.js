// companies API controller
'use strict';

var mongoose = require('mongoose'),
	Company = mongoose.model('Company');




/* 
   Create new Company 
========================================================================== */
exports.create = function(req, res) {
	var company = new Company(req.body);

	company.save(function(err) {
		if (err)
			res.send(err);

		// Return new companies
		// Company.find(function(err, companies) {
		// 	if (err)
		// 		res.send(err)
		// 	res.json(companies);
		// });

		// return success message, if successful!
		res.json({message: "success"});
	});
}


/* 
	Get all Companies   
========================================================================== */
exports.get = function(req, res) {
	Company.find(function(err, companies) {
		if (err) {
			res.send(err)
		};
		res.json(companies);
	});
}


/* 
	Delete a company   
========================================================================== */
exports.delete = function(req, res) {

	// res.json('this is the delete controller');
	Company.remove({
		_id: req.params.company_id
	}, function(err, company) {
		if (err)
			res.send(err);

		Company.find(function(err, companies) {
			if (err)
				res.send(err)
			res.json(companies);
		});
	});
}