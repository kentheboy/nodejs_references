const Logger = require('./logger');

const logger = new Logger();

logger.on('message', (data) => console.log('Called Listener: ', data));

logger.log('Hello world!');

// call of log() => emits 'message' @line10 in logger.js
//        'message' event generates PW and gets param 
// when 'message' event is emitted, line5 will take care of final display formation of data
