/**
 * Created by Chris on 2016. 4. 8..
 */

"use strict";

const router = require('express').Router();
const constroller = require('./ping.controller');

router.get('/', constroller.index);

module.exports = router;
