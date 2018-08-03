var http = require('http');

var server = http.createServer(function(request, response) {

    response.writeHead(200, {"Content-Type": "text/plain;charset = utf-8"});
    response.end("Hello World!世界你好！老朱你好！");

});

var port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);

console.log("123456789");