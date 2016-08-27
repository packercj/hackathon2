var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Topic = new Schema({
	items: [{type: mongoose.Schema.Types.ObjectId, ref: 'Item'}],
	name: {type: String, required: true}
});

module.exports = mongoose.model('Topic', Topic);