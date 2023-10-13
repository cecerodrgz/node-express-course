const EventEmitter = require('events');

const customEmitter = new EventEmitter();
customEmitter.on('response', (name, id) => {
    console.log(`${name} is ${id} old, according to the Night Court records`)
})

customEmitter.on('alert', (message) => {
    console.log(`Alert: ${message}`)
})

customEmitter.on('customEvent', (param1, param2) => {
    console.log(`Custom event received: ${param1}, ${param2}`)
})

customEmitter.emit('response', 'Velaris', 5000);
customEmitter.emit('alert', 'This is an important message');
customEmitter.emit('customEvent', 'Parameter 1', 'Parameter 2');
