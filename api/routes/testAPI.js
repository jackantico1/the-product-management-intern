var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.send('Blog post 1 text.');
});

module.exports = router;