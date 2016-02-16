/**
 * Created by Chris on 2016. 2. 15..
 */

var express = require('express'),
    router = express.Router(),
    controller = require('./ping.controller');

router.get('/', controller.index);

module.exports = router;