/**
 * Broadcast updates to client when the model changes
 */

'use strict';

exports.register = function(socket, arduino) {
  // from arduino
  arduino.on('AC:toggled', function (response) {
    onACToggled(socket, response);
  });

  // from client
  socket.on('AC:toggle', function () {
    console.log('send AC:toggle');
    onACToggle(arduino);
  });
};

function onACToggled(socket, response, cb) {
  socket.emit('AC:toggled', response);
}

function onACToggle(arduino) {
  arduino.io.sendString('AC:toggle');
}
