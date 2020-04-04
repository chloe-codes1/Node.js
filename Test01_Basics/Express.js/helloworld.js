var express = require('express')
var app = express()

app.get('/hello', function(request, response){
    response.send('hello world!!!')
})

var server = app.listen(8081, function(){
    var host = server.address().address
    var port = server.address().port

    console.log("App listening at http://%s:%s", host, port)
})