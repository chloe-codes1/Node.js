var http = require("http");
var fs = require("fs");
var url = require("url");

// 서버 생성
http.createServer(function(request, response) {
  // url 뒤에 있는 directory/file 이름 parsing
  var pathname = url.parse(request.url).pathname;

  console.log("Request for " + pathname + " received!");

  // 파일 이름이 비어있다면 index.html 로 설정
  if (pathname == "/") {
    pathname = "/index.html";
  }

  // 파일 읽기
  fs.readFile(pathname.substr(1), function(error, data) {
    if (error) {
      console.log(error);
      // 1) 페이지를 찾을 수 없을 때
      // HTTP Status: 404 : NOT FOUND
      // Content Type: text/plain
      response.writeHead(404, { "Content-Type": "text/html" });
    } else {
        // 2) 페이지를 찾았을 때
        // HTTP Status: 200 : OK
        // Content Type: text/plain
        response.writeHead(200, {'Content-Type': 'text/html'});	
    
        // 파일을 읽어와서 responseBody 에 작성
        response.write(data.toString());
    }
    // responseBody 전송
    
    response.end();

  });
}).listen(8081);


console.log('Server currently running at http://127.0.0.1:8081/ !');