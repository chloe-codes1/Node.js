var buffer1 = new Buffer('지금은 저녁 11시 ');
var buffer2 = new Buffer('배가 고프다');
var buffer3 = Buffer.concat([buffer1,buffer2]);

console.log("buffer3 content: " + buffer3.toString());