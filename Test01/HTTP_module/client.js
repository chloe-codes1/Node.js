var http = require('http');

// HTTP Request의 option 설정하긔
var options = {
    host: '127.0.0.1',
    port: '8081',
    path: '/index.html'
};

// Callback function으로 Response 받아오기
var callback = function(response) {
    // response event가 감지되면 data를 body에 받아오기
    var  body = '';
    response.on('data', function(data){
        body += data;
    });

    // end event가 감지되면 data 수신을 종료하고 내용을 출력
    response.on('end', function(){
        // data 수신 완료!
        console.log(body);
    });

    // Server에 HTTP Request 날리기~!
    var request = http.request(options, callback);
    request.end();
}