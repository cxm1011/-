let Promise1 = new Promise(function(resolve, reject){
    setTimeout(() => {resolve('第一个承诺！')}, 3000)
})
let Promise2 = new Promise(function(resolve, reject){
    setTimeout(() => {resolve('第二个承诺！')}, 2000)
})
let Promise3 = new Promise(function(resolve, reject){
    setTimeout(() => {resolve('第三个承诺！')}, 1000)
})

// Promise.all([Promise1,Promise2,Promise3])
// .then(function(result){
//   // 三个都成功则成功，此时Promise1，2，3的返回值组成数组，传递给p的回调函数  
//     console.log(result)
// }, function(error){
//   // 只要有一个失败，此时第一个被reject的实例返回值会传递给p的回调函数 
//     console.log(error)
// })

Promise.race([Promise1,Promise2,Promise3])
.then(function(result){
    console.log(result);
},function(error){
    console.log(error)
})
