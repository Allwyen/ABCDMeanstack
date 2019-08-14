const EventEmitter = require('events');

var emitter = new EventEmitter();

/*
emitter.on("doorOpen",()=>{
    console.log("Ring Ring...");
});

emitter.emit("doorOpen");
*/

emitter.on("doorOpen",(name)=>{
    console.log(name+" is waiting outside...");
});

emitter.on("doorOpen",(name)=>{
    console.log("Dear "+name+" please wait outside for a minute...");
});

//there can be one or more listeners for a single emit like wise there can also be multiple emitters

emitter.emit("doorOpen","Allwyen");
emitter.emit("doorOpen","Sebastian");