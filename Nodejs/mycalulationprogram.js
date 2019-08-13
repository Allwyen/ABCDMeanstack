const myop=require('./operation')
var x=10;
var y=12;
var d=myop.myadd(x,y);
var e=myop.mysub(x,y);
var f=myop.mymulti(x,y);
var g=myop.mydiv(x,y);
console.log("The add is : ",d);
console.log("The sub is : ",e);
console.log("The mul is : ",f);
console.log("The div is : ",g);