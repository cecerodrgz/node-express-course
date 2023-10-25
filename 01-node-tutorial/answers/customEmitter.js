const EventEmitter = require('events');

const emitter = new EventEmitter();

setInterval(() => {
    emitter.emit('timer', 'hi there');
}, 2000)


emitter.on('timer', (msg) => console.log(`Message received: ${msg}`))

emitter.emit('msg', 'Hi, this is a message')