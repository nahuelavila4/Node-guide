// Modulo event permite crear manejador de eventos
// on funciona como addeventlistener

const EventEmitter = require("events");
const event = new EventEmitter();

event.on('response', (data) => {
    console.log("received");
    console.log(data);
})

event.emit('response', 'Hola mundo');
event.emit('response', 'Holamudo');
event.emit('response', 13342);
event.emit('response', [13, 23, 5, "fir"]);