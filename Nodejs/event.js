const EventEmitter = require('events');

var emitter = new EventEmitter();

emitter.on("doorOpen",()=>{
    console.log("Ring Ring...");
});

emitter.emit("doorOpen");
