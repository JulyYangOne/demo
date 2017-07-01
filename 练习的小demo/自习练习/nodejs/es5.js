/**
 * Created by july on 2017/7/1.
 */
"use strict"

//const 如果用const声明的话会报错！常量用const，变量用let
//let name = "小米";
//console.log(name);
//name = "小红";
//console.log(name);
//方法1 includes
//const str = "hello world";
//let result = str.includes("12");  false
//let result = str.includes("wo");//true
//let result = str.startsWith("he");//true
//let result = str.endsWith("ld");//true
//const result =
//`
//123,
//     234,
//            678
//`
//console.log(result);
// function add(a,b){
//     return a+b;
// }
//console.log(add(1, 2));
//2个参数写法
//const add =(a,b) =>{
//    return a+b;
//}
//console.log(add(1, 2));
//一个参数的写法
const add = name => console.log("我的名字是"+name);
add("小米");
