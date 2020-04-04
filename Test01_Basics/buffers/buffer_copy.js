var buffer1 = new Buffer('몇시에 잘까?');

//copy a buffer
var buffer2 = new Buffer(20);
buffer1.copy(buffer2);
console.log("buffer2 content: " + buffer2.toString());