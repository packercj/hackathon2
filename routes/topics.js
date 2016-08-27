
var express = require('express');
var router = express.Router();
var Topic = require('../models/topic');
var Item = require('../models/item');

/* GET home page. */
router.get('/', function(req, res) {
	Topic.find( function(err, topics) {
		res.json(topics);
	})
});

router.get('/:id', (req, res) => {
	res.render('topic');
});

router.get('/:id/items', (req, res) => {
	Item.find({ topicId: req.params.id}, (err, items) => {
		res.json(items);
	})
})

module.exports = router;
