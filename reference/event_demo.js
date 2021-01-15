const EventEmitter = require('events');

// Create class
class MyEmitter extends EventEmitter{

}

// Init Object
const myEmitter = new EventEmitter();

// Event listner
myEmitter.on('event', () => console.log('Event Fired!'));

// Inint event
myEmitter.emit('event');