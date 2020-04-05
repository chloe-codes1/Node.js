var express = require('express');
var app = express();

// server가 읽을 수 있도록 HTML의 위치를 정의해주긔
app.set('views',__dirname + '/views');

// server가 HTML rendering을 할 때 EJS engine 사용하도록 설정하긔
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

var server = app.listen(8000, function(){
    console.log("Express server has started on port 8000!!")
})

// public directory를 static folder로 설정
app.use(express.static('public'));

//body-parser 사용하기
var bodyParser = require('body-parser');

// express-session 사용하기
var session = require('express-session');
var fs = require('fs')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(session ({
    secret: '@this#is#secret#key@',
    resave: false,
    saveUninitialized: true
}))

// router module인 main.js를 불러와서 app에 전달하긔
var router = require('./router/main')(app,fs);