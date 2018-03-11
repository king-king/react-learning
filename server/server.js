//引入http模块
var http = require("http");
//设置主机名
var hostName = '127.0.0.1';
//设置端口
var port = 8080;
//创建服务
var server = http.createServer(function (req, res) {
    console.log(req.url);
    switch (req.url) {
        case '/good.ajax':
            res.writeHead(200, {
                'Content-Type': 'application/json; charset=utf-8',
                'Access-Control-Allow-Origin': '*'
            });
            res.end(JSON.stringify({
                content: [],
                status: 0
            }));
            break;

        default:
            res.writeHead(404);
            res.end();
            break;
    }
});
server.listen(port, hostName, function () {
    console.log(`服务器:http://${hostName}:${port}`);
});
