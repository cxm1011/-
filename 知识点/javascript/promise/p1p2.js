const p1 = new Promise((resolve,reject) => {
    setTimeout(() => reject(new Error('fail')),1000);
})

const p2 = new Promise((resolve,reject) => {
    // 当p2计时开始时，p1的定时器也开启了。
    // 这时p1的状态就会传递给p2，也就是说，p1的状态决定了p2的状态。如果p1的状态是pending，那么p2的回调函数就会等待p1的状态改变；
    // 如果p1的状态已经是resolved或者rejected，那么p2的回调函数将会立刻执行。
    setTimeout(() => resolve(p1),2000);
})

p2.then(data => {
    console.log(data);
},error => {
    console.log('p2'+error);
}).catch(
    error => {
        console.log('error'+error);
    }
)