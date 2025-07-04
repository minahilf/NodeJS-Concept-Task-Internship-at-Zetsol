const EventEmitter = require('events')
const myEmitter = new EventEmitter()

myEmitter.on('greet', (name) => {
    console.log(`hello ${name}`);  
})

myEmitter.emit('greet', 'Minahil')