//定义: join() 方法用于把数组中的所有元素通过指定的分隔符进行分隔放入一个字符串，返回生成的字符串。
let a= ['hello','world'];
let str=a.join(); // 'hello,world'
let str2=a.join('+'); // 'hello+world'
let str3=a.join(''); // 'helloworld'
console.log(str);
console.log(str2);
console.log(str3);