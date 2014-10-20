'use strict';

var mongoose  = require('mongoose'),
    timestamp = require('mongoose-timestamp'),
    Schema    = mongoose.Schema;

var ThermoHygroHistorySchema = new Schema({
  temperature: Number,
  humidity:    Number,
  heatIndex:   Number
}, {
  capped: {
    size: 1073741824,
    max: 1051200,
    autoIndexId: true
  }
});
ThermoHygroHistorySchema.plugin(timestamp);
ThermoHygroHistorySchema.index({createdAt: -1});

module.exports = mongoose.model('ThermoHygroHistory', ThermoHygroHistorySchema);
