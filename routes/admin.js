var express = require('express');
var router = express.Router();
var Topic = require('../models/topic');
var Item = require('../models/item');

router.get('/', function(req, res) {
  res.render('admin');
});

router.get('/topics', function(req, res) {
  Topic.find( function(err, topics) {
    res.json(topics);
  });
});

router.post('/topics', function(req, res) {
  new Topic({
    name: req.body.name
  }).save( function(err, topic) {
    res.json(topic);
  });
});

router.post('/topics/:id/items', function(req, res) {
  new Item({
    name: req.body.name,
    description: req.body.description,
    topicId: req.params.id
  }).save( function() {
  })
});

module.exports = router;
