数组方法有三大类
1 改变原数组
2 不改变原数组
3 数组遍历

1 改变原数组
let a = [1,2,3];
ES5:
    a.splice()/ a.sort() / a.pop()/ a.shift()/  a.push()/ a.unshift()/ a.reverse()
ES6:
    a.copyWithin() / a.fill

2 不改变原数组
ES5：
slice、join、toLocateString、toString、cancat、indexOf、lastIndexOf、
ES7：
includes

3.forEach  every  some  map filter reduce reduceright
 关于forEach()你要知道：

// 无法中途退出循环，只能用return退出本次回调，进行下一次回调。
// 它总是返回 undefined值,即使你return了一个值。
