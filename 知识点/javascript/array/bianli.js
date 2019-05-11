// 关于forEach()你要知道：

// 无法中途退出循环，只能用return退出本次回调，进行下一次回调。
// 它总是返回 undefined值,即使你return了一个值。

//定义：reduce() 方法对累加器和数组中的每个元素（从左到右）应用一个函数，最终合并为一个值。
// array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
let arr = [1,2,3,4,5];
let sum = arr.reduce((a,b) => {
    return a+b;
},0)
console.log('sum',sum);