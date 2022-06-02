const http = require("http");

// request는 요청받을때 정보가 담기게 됨
// response는 클라이언트에 응답보낼때 
http
  .createServer((req, res) => {
    if(req.url === "/") {
      res.writeHead(200);
      res.end("main url");
    } else if (req.url === "/upload") {
      res.writeHead(200);
      res.end("upload url");
    } else if (req.url === "/delete") {
      res.writeHead(200);
      res.end("delete url");
    }else {
      res.writeHead(404);
      res.end("Not found");
    }
  // res.writeHead(200, {"Content-Type": "test/html"});
  // res.end("<p>Hello World~!!!</p>"); //응답 보낼 코드
  })
  .listen(3000, () => {
    console.log("3000번 포트 서버 접속 완료~!!");
  }); // 서버를 다만들고 3000번 포트에서 대기시키기
  // 응답을 보낼때 head값을 통해서 상태코드를 보내고, 어떤 타입인지도 보낼 것이다
  // 200 응답을 잘 보냈을때
  // 404 해당 응답이 정상적으로 이루어지지 않았을때
  // 500
  // 503