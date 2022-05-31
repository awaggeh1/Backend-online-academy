var express = require('express');
const { route } = require('./app');
var router = express.Router();

// GET HOME PAGE
router.get('/', function(req, res, next){
    res.send('index', {title: 'Express'});
});

module.exports = router;