var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Item = new Schema({
	topicId: {type: String, required: true},
	name: {type: String, required: true},
	picture: String,
	description: String,
	comments: [{type:mongoose.Schema.Types.ObjectId, ref: 'Comment'}]
});

module.exports = mongoose.model('Item', Item);
