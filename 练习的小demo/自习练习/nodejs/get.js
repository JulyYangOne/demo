/**
 * Created by july on 2017/7/1.
 */
'use strict'
//导入模块
const http =require("http");
const url = require("url");
const querystring = require("querystring");
//2创建一个服务
const server = http.createServer();
//3请求，处理，响应
server.on("request",(req,res)=>{

    const urlString = req.url;

if(!urlString.includes("ico")){
    const urlObj = url.parse(urlString);
    const params = querystring.parse(urlObj.query)
    console.log(params);
}
    res.setHeader("Content-Type","text/html;charset=utf8");
    res.end("<h1>OK</h1>");
})
//4开启式web服务，监听浏览器请求
server.listen(3000,"127.0.0.1",(err)=>{
    if(err){
        console.log(err);
    }
    console.log("start");
})