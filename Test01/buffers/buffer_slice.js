var buffer1 = new Buffer('Slice this buffer');

//slicing a buffer
var buffer2 = buffer1.slice(0,10);
console.log("buffer2 content: " + buffer2.toString());