var conf = require('./config/environment');
var ThermoHygroHistory = require('./api/thermoHygroHistory/thermoHygroHistory.model'),
    HI      = require('heat-index'),
    COMMAND = {
      TH: {
        GET: 'TH:get'
      },
      AC: {
        TOGGLE: 'AC:toggle'
      }
    };

// SysEx STRING_DATA handler
function onString(arduino, data) {
  var response = parseStringMessage(data);
  if (response.type === 'XX') {
    console.log(data);
    return;
  }

  if (response.type === 'TH') {
    var th = new ThermoHygroHistory(response);
    th.save();
  } else if (response.type === 'AC') {
    arduino.emit('AC:toggled', response);
  }
}

// format string data to object
function parseStringMessage(data) {
  var response = {
    type : data.split(':', 2)[0],
    body : data.split(':', 2)[1]
  };

  if (response.type === 'TH') {
    response.temperature = parseFloat(response.body.split(',', 2)[0]);
    response.humidity    = parseFloat(response.body.split(',', 2)[1]);
    response.heatIndex   = HI.heatIndex(response);
  }

  return response;
}

// send Temperature and Humidity request to Arduino
function requestTemperatureHumidity(arduino) {
  if (! arduino.io) {
    console.error('not connected to arduino.');
    return;
  }

  arduino.io.sendString(COMMAND.TH.GET);
  console.log('to arduino: sent TH request');
}

module.exports = function (arduino) {
  arduino.on('ready', function () {
    arduino.on('string', function (data) {
      onString(arduino, data);
    });

    setInterval(requestTemperatureHumidity, conf.arduino.interval, arduino);
  });
};
