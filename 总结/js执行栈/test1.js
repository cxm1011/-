console.log('1');

// set1
setTimeout(function(){
    console.log('2');
    // set4
    setTimeout(function(){
        console.log('3');
    },0)

    // pro2
    new Promise(function(resolve){
        console.log('4');
        resolve();
    }).then(function(){
        console.log('5');
    })
},0)

//pro1
new Promise(function(resolve){
    console.log('6');
    resolve();
}).then(function(){
    console.log('7');
    // set3
    setTimeout(function(){
        console.log('8');
    },0)
})

// set2
setTimeout(function(){
    console.log('9');

    // pro3
    new Promise(function(resolve){
        console.log('10');
        resolve();
    }).then(function(){
        console.log('11');
    })
},0)

// node输出: 1 6 7 2 4 9 10 5 11 8 3
// 浏览器输出: 1 6 7 2 4 5 9 10 11 8 3

//解析：
// 在浏览器中 macro task 执行完成后，再次循环 宏任务 的回调队列之前，会优先处理micro中的任务。
// 在 Node 中有6个宏任务队列，事件循环首先进入 poll 阶段。进入 poll 阶段后查看是否有设定的 timers ( 定时器 )
// 时间到达，如果有一个或多个时间到达， Event Loop 将会跳过正常的循环流程，直接从 timers 阶段执行，并执行 timers 
// 回调队列，此时只有把 timers 阶段的回调队列执行完毕后。才会走下一个阶段，这也就是为什么 setTimeout 中有 .then，
// 而没有被立即执行的原因，当 timers 阶段的回调队列执行完毕后，切换到下一个阶段这个过程中去触发
// 微任务(process.nextTick 和 .then) 。在阶段与阶段的切换之间。

