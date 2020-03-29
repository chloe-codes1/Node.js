var buf = new Buffer('Make it into JSON object');
var json = buf.toJSON(buf);

console.log(json);