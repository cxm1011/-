## 参考文章
### 参考链接
1.JavaScript中的JS引擎的执行机制
https://zhuanlan.zhihu.com/p/33105489

2.从一道执行题，了解Node中JS执行机制
https://juejin.im/post/5b16a388f265da6e113f7a3d

3.JS引擎的执行机制
https://juejin.im/post/5a98c371518825556a71d397

4.一篇给小白看的 JavaScript 引擎指南
http://web.jobbole.com/84351/

5.微任务、宏任务与Event-Loop
https://juejin.im/post/5b73d7a6518825610072b42b

6.Node 定时器详解
http://www.ruanyifeng.com/blog/2018/02/node-event-loop.html



### 分享内容
基础概念：
javascript是单线程语言
在浏览器中一个页面永远只有一个线程在执行js脚本代码（在不主动开启新线程的情况下）。

javascript是单线程语言,但是代码解析却十分的快速，不会发生解析阻塞。
javascript是异步执行的，通过事件循环（Event Loop）的方式实现。

1.异步：现在与将来
程序中现在运行的部分和将来运行的部分之间的关系就是异步编程的核心。

分块的程序
example
```jsx

    function now(){
        return 21;
    }

    function later(){
        answer = answer * 2;
        console.log(answer);
    }
    var answer = now();
    setTimeout(later,1000); 

```

现在： 
```jsx

    function now(){
        return 21;
    }
    function later(){...}
    var answer = now();
    setTimeout(later,1000); 

```

将来：
```jsx

    answer = answer * 2;
    console.log(answer);
    
```
任何时候，只要将一段代码包装成一个函数，并指定它在响应某个事件(定时器、鼠标点击、Ajax响应等)时执行，你就是在代码中创建了一个将来执行的块，也由此在这个程序中引入了异步机制。

2.事件循环
伪代码：
```jsx
//eventLoop是一个用作队列的数组
var eventLoop = [];
var event;
while(true){
    // 一次tick
    if(eventLoop.length > 0){
        // 拿到队列中的下一个事件
        event = eventLoop.shift();
        // 现在执行下一个事件
        try{
            event();
        }catch(err){
            reportErr(err);
        }
    }
}
```
有一个用while循环实现的持续运行的循环，循环的每一轮称为一个tick。对于每个tick而言，如果在队列中有等待事件，那么就会从队列中摘下一个事件并执行。这些事件就是你的回调函数。

一定要清楚，setTimeOut(...)并没有将你的回调函数挂在事件循环队列中，它所做的是设定一个计时器。当定时器到时后，环境会将你的回调函数放在事件循环中，这样，在未来某个时刻会摘下并执行这个回调。

如果这个时候事件循环中有20个事件会怎么样？你当回调只能等待。它得排在其他事件后面，这也解释了为什么setTimeOut定时器精度可能不高。


3.微任务和宏任务  执行过程 画个流程图

4.浏览器与node事件循环对比

4.实践分析
test8.js
test3.js
test6.js


