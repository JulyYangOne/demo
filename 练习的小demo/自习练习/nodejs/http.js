////1.导入我们需要的http模块
// const http = require("http");
// const url  = require("url");
////2  利用我们的http对象
//  const server  = http.createServer();
////3.利用server来监听浏览器发送过来的请求，并且响应相对的数据回去
////这是server中监听浏览器的请求使用的事件
////回调的参数分别是请求和响应
//server.on("request", function (req,res) {
//    //打印url模块的地址
//    console.log(req.url);
//    const urlObj = url.parse(req.url,true);
//    console.log(urlObj+"=>"+urlObj.query.name);
//    //设置请求头
//    res.setHeader("Content-Type","text/html;charset=utf-8");
//    //end要放在最后
//
//    res.end(
//        "<h1>12345678<h3>"
//    );
//});
////4.启动服务，开启监听
//server.listen(8899,"127.0.0.1", function (err) {
//    if(err){
//        console.log(err);
//
//    };
//    //下面代码执行了表示成功
//    console.log("成功");
//
//})


//1导入我们需要的模块
const http = require("http");
const url =require("url");
//2利用我们http对象
const server =http.createServer();
//3利用server来监听浏览器发过来的请求
server.on("request", function (req, res) {
    res.end("123456");
})
//4启动服务，开始监听
server.listen(8800,"127.0.0.1", function (err) {
    if(err){
        console.log(err);
    }
    console.log("start");
})


