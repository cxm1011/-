console.log(typeof(null));  //object
console.log(Object.prototype.toString.call(null)); //[object Null]
console.log(Object.prototype.toString.call('1'));//[object String]
console.log(Object.prototype.toString.call([1,2]));//[object Array]
//判断是否为数组方法
console.log(typeof([1,2]));  //object
console.log([1,2] instanceof Array);  //true
console.log([1,2].constructor === Array);  //true