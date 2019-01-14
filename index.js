var http = require('http');

var server = http.createServer(function (req,res) {
    console.log(req.url);
    res.writeHead(200,{'Content-Type':'text/plaine; charset = utd-8'});
    res.end('Oh no Oh no');
});
server.listen(3000,'127.0.0.1');

