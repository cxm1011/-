// 定义： 方法返回一个从开始到结束（不包括结束）选择的数组的一部分浅拷贝到一个新数组对象，且原数组不会被修改。
// array.slice(begin, end);
let a= ['hello','world'];
let b=a.slice(0,1); // ['hello']
a[0]='改变原数组';
console.log(a,b); // ['改变原数组','world'] ['hello']
b[0]='改变拷贝的数组';
 console.log(a,b); // ['改变原数组','world'] ['改变拷贝的数组']
