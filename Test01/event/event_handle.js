// events module 사용
var events = require('events');

// EventEmitter object 생성
var eventEmitter = new events.EventEmitter();

// EventHandler 함수 생성
var connectHandler = function connected(){
    console.log("You've connected");

    // data_received event 발생시키기
    eventEmitter.emit('data_received');
}

// connection event와 connectHandler 를 연동
eventEmitter.on('connection', connectHandler);

// data_received event와 anonymous function 연동
// -> 함수를 변수안에 담는 대신에, .on() method의 인자로 직접 함수를 전달
eventEmitter.on('data_received', function() {
    console.log('Data received');
}) 

// connection event 발생 시키기
eventEmitter.emit('connection');

console.log('Program has ended');