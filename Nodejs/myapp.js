const myos=require('os'); //os related
const myfs=require('fs'); //file system related

var userdata=myos.userInfo();
var userplatform=myos.platform();

//apendfile() will not overwrite the content but the write() will.

myfs.appendFile("mydata.txt",userdata.username,(error)=>{
    if(error)
    {
        throw error;
        console.log(error);
    }
});

console.log(userdata);
console.log("Username: "+userdata.username+" Platform: "+userplatform);