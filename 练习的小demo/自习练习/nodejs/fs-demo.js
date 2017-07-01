/**
 * Created by july on 2017/7/1.
 */
'use strict'
//严格模式
//1.导入需要的模块
const path = require('path');
const fs = require("fs");
//原文件夹和原文件的路径
const sourceDir = path.join(__dirname,"abc");
const sourcePath = path.join(__dirname,"abc/abc.txt");
//目标文件和文件夹的路径
const targetDir = path.join(__dirname,"eee");
const targetPath = path.join(__dirname,"eee/eee.txt");
//1.监控源文件
fs.watchFile(sourcePath,(curr,prev)=>{//参数是更改的时间和更改后的时间
    ////1检测这个文件存不存在
    //fs.exists(targetPath,(exists)=>{
    //    //如果不存在就return
    //    if(!exists){
    //        console.log("目标文件已经被干掉了");
    //        return;
    //    }
    //})
    //2判断目标文件夹是否存在
    fs.exists(targetDir,(exists)=>{
        if(!exists){
            //不存在的话就创建一个
            fs.mkdir(targetDir,(err)=>{
                if(err){
                    console.log(err);
                }
                console.log("mkdir OK");
            })
        }
    })
    //3读取源文件
    fs.readFile(sourcePath,(err,data)=>{
        if(err){
            console.log(err);
        }
        if(data==null){
            return;
        }
        //    4.把我们读取到的data写入到目标文件中
        fs.writeFile(targetPath,data,(err)=>{
            if(err){
                console.log(err);
            }
            console.log("写入成功");
        })
    })


})

