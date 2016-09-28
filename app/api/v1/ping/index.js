/**
 * Created by Chris on 2016. 4. 8..
 */

"use strict";

const router = require('express').Router();
const controller = require('./ping.controller');

router.get('/', controller.index);

module.exports = router;
