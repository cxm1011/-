# 1.对象复制
let obj = {
    a: 1,
    b: {
        c:2
    }
}
// 1) 直接拷贝  浅拷贝第一种情况 两个变量obj 和 obj2 之间还是会相互影响。
// let obj2 = obj;  // 对象浅拷贝 拷贝过后一个对象值的改变会影响另一个对象中的值
// obj.a = 11;
// console.log(obj2.a);  // 11
// obj2.b.c = 21;
// console.log(obj.b.c);  // 21

// 2）Object.assign  浅拷贝第二种情况。只是简单的拷贝对象的第一层属性，基本类型值不再相互影响，但是对其内部的引用类型值，拷贝的任然是是其引用，内部的引用类型值还是会相互影响。
// 也是只拷贝值，不过一个对象中值的改变不会影响另一个对象中的值。但是一个对象的对象中的值改变则会
// 影响另一个对象的对象中的值。因为Object.assign拷贝对象中的对象也仅拷贝引用值
// let obj3 = Object.assign({},obj);
// obj.a = 11;
// console.log(obj3.a);  // 1
// obj3.b.c = 21;
// console.log(obj.b.c);  // 21

// 3）深拷贝
// 缺陷； 1）对象必须遵从JSON的格式  2） ，所有函数及原型成员都会被有意忽略，不体现在结果中，
// 也就是说这种方法不能拷贝对象中的函数。此外，值为 undefined 的任何属性也都会被跳过
// let obj4 = JSON.parse(JSON.stringify(obj));
// obj.a = 11;
// console.log(obj4.a);  // 1
// obj4.b.c = 21;
// console.log(obj.b.c);  // 2

# 2.数组复制
var array = [1, 'string', {a: 1,b: 2, obj: {c: 3}}];

//循环
let array0 = [];
for(let val of array){
    array0.push(val);
}
// slice()
var array1 = array.slice();
// concat()
var array2 = array.concat();

let array4 = [...array]; //只能拷贝值 对象只能拷贝引用

let array5 = JSON.parse(JSON.stringify(array));; //深拷贝
// 改变原数组元素
array[1] = 'newString';
array[2].obj.c = 4;


console.log(array0[1]); // string
console.log(array0[2].obj.c); // 4

console.log(array1[1]); // string
console.log(array1[2].obj.c); // 4

console.log(array2[1]); // string
console.log(array2[2].obj.c); // 4

console.log(array4);
console.log(array4[1]); // string
console.log(array4[2].obj.c); // 4

console.log(array5);
console.log(array5[1]); // string
console.log(array5[2].obj.c); // 3

# 3.event loop
http://www.ruanyifeng.com/blog/2014/10/event-loop.html
同步任务都在主线程上执行，形成一个执行栈
主线程之外，还存在一个任务队列。只要异步任务有了运行结果，就在任务队列之中放置一个事件。
一旦执行栈中的所有同步任务执行完毕，系统就会读取任务队列,将队列中的事件放到执行栈中依次执行
主线程从任务队列中读取事件，这个过程是循环不断的

整个的这种运行机制又称为 Event Loop (事件循环)

# 4.promise
http://blog.leanote.com/post/isaacgao/%E5%BF%85%E9%A1%BB%E6%90%9E%E6%87%82%E7%9A%84%E5%BC%82%E6%AD%A5%E7%A5%9E%E5%99%A8%EF%BC%9APromise
promist.all 应用场景
1）在实际的业务开发时，经常遇到一些场景：分别请求两个服务器API，当都返回正确结果后，再处理相应的逻辑。
2）在前端开发请求数据的过程中，偶尔会遇到发送多个请求并根据请求顺序获取和使用数据的场景，使用Promise.all毫无疑问可以解决这个问题
promist.race 应用场景
Race的使用场景：比如我们可以用race给某个异步请求设置超时时间，并且在超时后执行相应的操作，代码如下：

# 5.export和export default区别
每个文件中可使用多次export命令
在一个文件或模块中，export、import可以有多个，export default仅有一个
通过export方式导出，在导入时要加{ }，需要知道所加载的变量名或函数名，export default则不需要且import时可指定任意名字

# 6.amd和cmd区别
AMD和CMD最大的区别是对依赖模块的执行时机处理不同，而不是加载的时机或者方式不同，二者皆为异步加载模块。
AMD依赖前置，js可以方便知道依赖模块是谁，立即加载；而CMD就近依赖，需要使用把模块变为字符串解析一遍才知道依赖了那些模块，这也是很多人诟病CMD的一点，牺牲性能来带来开发的便利性，实际上解析模块用的时间短到可以忽略




