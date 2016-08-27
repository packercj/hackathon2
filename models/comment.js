var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Comment = new Schema({
	itemId: {type: String, required: true},
	content: String
});

module.exports = mongoose.model('Comment', Comment);