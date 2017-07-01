# 内容回顾

## REPL

	使用node.exe开启的一块内存空间
	
## 模块化思想
	
	功能相似的代码放入一个文件.js，Node是基于CommonJS，同步加载
	
	服务器端	: CommonJS规范
	浏览器端 : AMD requirejs Async Module Define
	
	AMD&CMD 
		https://www.zhihu.com/question/20351507/answer/14859415
	
## Node中的模块的使用
	http url
	
	http:
		作用：开启web服务，给浏览器提供数据与存储数据
		
	url:
		作用：能够拿到浏览器通过GET请求传递过来的路径和参数
		路径:知道浏览器的意图
		参数:根据意图做事
		
## es6
	未来的趋势
	http://es6.ruanyifeng.com/
	
	let&const
	
	startsWith 判断协议头
	endsWith 判断文件格式
	includes 判断是否包含
	
	模版字符串 语法 ``
	
	箭头函数
	
	const add = (形参列表...) => {
		函数体
	}
	
	const add5 = (x) => {
		return x + 5
	} 可以简写成下面的样子
	
	const add5 = x => x + 5 【了解】
	
--------------------------

# 服务器

	

--------------------------

# querystring path fs

--------------------------

## QueryString
	
	作用:
		将GET/POST传递过来的参数，进行解析
		GET : ?username=zhangsan&pwd=123
		POST : username=zhangsan&pwd=123
		
	使用:
		const querystring = require('querystring')
		
		const paramsObj = querystring.parse(键值对的字符串)


-------------------------

## HTTP

### 请求
	见截图


### 响应
	见截图

--------------------------

## GET&POST

	相同点:
		都是HTTP协议的方法
		都能传递参数给服务器
	
	不同点:
		1、传参的方式不一样
			GET 放在路径后面 ?开始，后面键值对
			POST 放在请求体 键值对的方式
			
		2、传参的限制不一样
			GET 2048
			POST 2M
			
		3、GET有缓存，POST没有
		
		4、GET传参不安全，POST相对安全
		
	开发中的建议
		如果只是单纯的获取数据，就用GET，因为GET有缓存效率高
		
		如果是要向服务器提交数据，就用POST

--------------------------

## fs&path

### path

	作用：获取路径
	
	path.join(__dirname,'你要读取的文件夹下面的文件名称即可')
	
	__dirname全局属性，代表当前文件所在的文件夹路径
	
	path.join会自动判断文件的路径，并且给他加上`/`
	
### fs
	作用:读取服务器硬盘上面的某一个文件(操作文件)
	
	fs.readFile ： 异步读取服务器硬盘上面的某一个文件

--------------------------

### 作用
	
	fs:node去读取服务器硬盘中的文件(操作文件)
	
	path:获取文件的路径

	上面两个基本上配合起来用
	
--------------------------

## 出现乱码的原因及解决方案

### 出现乱码的原因
	我们文件在写入和读取的时候，编码不一致，造成的问题
	
### 解决办法
	文件在写入与读取的时候，要保持编码一致，并且用UTF-8 Android
	
### 编码介绍
	ASCII 键盘上看到了
	ISO-8859-1 欧洲计算机协会整的
	韩语 xxx
	中国 GB2312 5000汉字
		 GBK 2万个汉字	
		 
	大五码：台湾，香港 繁体中文

	日语 
		片假名，平假名
	
	UTF-8 包含世界上所有国家最常用的文字，统一
	
### Node支持的编码
	ASCII 
	
	UTF-8
	
### Node中使用GBK编码读取文件
	默认情况下，核心模块是没有提供GBK编码支持的，需要我们去npmjs.com 上去下载一个第三方包 iconv-lite

	npmjs.com类似于github，里面有很多开源的项目
	
	npm install iconv-lite --save/--save-dev

	--save 代表把我们这个包的信息记录在package.json
	
	--save-dev 开发阶段 gulp
	--save 生产阶段 angular angular-router
	
	
	npm install iconv-lite --save
	
### package.json
	项目的配置文件
	
	生成：在项目的根目录 npm init -y(默认)

--------------------------

# 文件和文件夹的操作

### 文件夹的操作
	创建:mkdir
	删除:rmdir
	重命名文件夹/文件 rename
	判断文件夹/文件是否存在 exists
	
### 文件的操作
	写入文件 writeFile
	追加文件 appendFile
	判断文件是否存在 exists
	重命名文件 rename
	删除文件 unlink
	监控文件的改变 watchFile
	
### 做一个小的demo来巩固我们文件夹和文件的操作
	我想监控abc/abc.txt，如果发现这个文件一旦更改，就将abc.txt所有的内容，写入到eee/eee.txt中去
	
	步骤:(文件的复制)
		1、使用fs.watchFile监控源文件的更改
		2、判断eee是否存在，不存在则创建 fs.mkdir
		3、读取abc/abc.txt的内容 fs.readFile
		4、将读取到的abc.txt的二进制，写入到eee/eee.txt
		
	文件剪切

### es6中通过Promise来解决这个异步嵌套过多的问题
	http://es6.ruanyifeng.com/#docs/promise
	
	promise对象.then(xxx)


### 注意事项
	1、文件夹必须得程序员自己创建
	2、文件可以不用自己创建，当往里面写内容的时候，它就会自动创建
	
--------------------------

## 同步和异步
	以调用同步方法和异步方法为例
	
	同步&异步
	同步:如果我们执行的是一个同步方法，必须等着同步方法执行完毕，才能执行后面的代码
	
	异步:如果我们执行的是一个异步方法，不需要等着我们异步方法执行完毕，就可以执行后面的代码
	

	相同点:
		调用异步&同步方都可以获取结果
		
	不同点:
		1、获取结果的方式不一样，同步通过返回值，异步通过回调函数
		
		2、同步没有回调函数，异步会有回调函数
		
		3、做耗时间的操作，同步会阻塞住，异步不会
		
	生活化的例子
		我现在在上课，水杯中没水了，想喝水(目的，获取到的结果)
		
		同步的方式:
			先停止上课，然后去茶水间接收，接水回来喝，再上课
			
		异步的方式:
			我继续上课，让高超帮我去接水，他把水给我，xxx
	
	
	开发中如何去选择?
	  	1、耗时间操作用异步
	  	2、其它用同步,同步能保证代码的顺序
		

-------------------------

## 其它

	nodemon
	
	全局第三方包,可以监控我们源代码的更改，如果我们源代码发生了更改，就可以重新运行我们.js文件
	
	安装:
		npm i nodemon -g 
		安装成功之后会放在我们node的安装目录下
		
	使用:
		在终端使用，比如nodemon , nodemon 你要执行的js文件
		
	本地包&全局包
		
	相同点
		1、都要使用npm i 进行安装
		2、都是从npmjs.com上面进行下载安装的
	
	不同点
		1、安装方式 
			本地包 npm i xxx --save/--save-dev
			全局包 npm i xxx -g
			
		2、安装的地方不一样
			本地包，项目的node_modules
			全局包，node安装目录或是个人目录 > AppData > Roaming > npm
			
		3、使用场合不一样
			本地包:是用在项目中的，为我们项目服务的
			全局包:在终端中使用，执行一些指令的
	
--------------------------

## 自定义模块
	参考:
		http://javascript.ruanyifeng.com/nodejs/module.html#toc4
	
### 模块的分类
	1、核心模块，node本身提供的 http url querystring path fs
	
	2、第三方模块
		先安装到我们本地项目中，再使用
		npm安装
		
	3、自定义模块
		给别的js文件去用
	

	上面三种分别是我们以后可能都会在项目中遇到的这些模块，使用都是使用CommonJS规范的require去加载
	
### 自定义模块
	CommonJS规范认为，一个.js文件就可以看成一个模块，如果我们想把模块中定义的变量，方法，对象给外面的js使用，就必须使用CommonJS提供module将我们需要给外面用的东西，导出去
	
	以自定义计算器为例
	
### 注意点
	在commonjs中导入模块用 require
	在commonjs中在模块中导出 使用module.exports
	如果是自定义模块，在导入自定义模块的时候，得把路径写完整
	require导入的东西，就是别的文件modulu.exports导出的东西
	
--------------------------