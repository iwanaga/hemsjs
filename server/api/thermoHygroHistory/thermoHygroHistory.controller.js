'use strict';

var _ = require('lodash');
var Thermohygrohistory = require('./thermoHygroHistory.model');

exports.last = function(req, res) {
    Thermohygrohistory.findOne({}, null, { sort:{ createdAt: -1 } }, function (err, thermoHygroHistory) {
        if(err) { return handleError(res, err); }
        if(!thermoHygroHistory) { return res.send(404); }
        return res.json(thermoHygroHistory);
    });
};

function handleError(res, err) {
  return res.send(500, err);
}