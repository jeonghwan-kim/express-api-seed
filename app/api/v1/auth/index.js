/**
 * Created by Chris on 2016. 4. 9..
 */

"use strict";

const router = require('express').Router();
const constroller = require('./auth.controller.js');

router.post('/', constroller.create); // login
router.delete('/', constroller.destroy); // logout
router.put('/', constroller.update); // changePassword or resetPassword

module.exports = router;
