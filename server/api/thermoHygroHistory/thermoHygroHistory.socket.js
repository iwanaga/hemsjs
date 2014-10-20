/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var ThermoHygroHistory = require('./thermoHygroHistory.model');

exports.register = function(socket) {
  ThermoHygroHistory.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
};

function onSave(socket, doc, cb) {
  socket.emit('ThermoHygroHistory:save', doc.toObject());
}
