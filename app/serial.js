const SerialPort = require('serialport');
const serialList = require('@serialport/list')
console.log(serialList);
/*
const parsers = SerialPort.parsers;

// Use a `\r\n` as a line terminator
const parser = new parsers.Readline({
  delimiter: '\r\n'
});

const port = new SerialPort('COM3', {
    baudRate: 9600
  });

port.pipe(parser);

port.on('open', () => console.log('Port open'));

 parser.on('data', console.log);*/
/*parser.on('data', function(data){
    console.log('main.js => retorno =>', data);
    sendToLoopback(data);
});*/
