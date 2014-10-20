'use strict';

var express = require('express');
var controller = require('./thermoHygroHistory.controller');

var router = express.Router();

router.get('/last', controller.last);

module.exports = router;