//
// 参数列表转数组
// 1.[].slice.call(arguments);
// 2.Array.from(arguments);
// 3. [...arguments]
function create(){
    let obj = {};
    let Con = [].shift.call(arguments);
    obj.__proto__ = Con.prototype;
    let result = Con.apply(obj, arguments)
    return result instanceof Object ? result : obj  //构造函数如果返回值为对象，那么这个返回值会被正常使用
}

function Car(color) {
    this.color = color;
}

Car.prototype.start = function() {
    console.log('this.color',this.color);
}

let car = new create(Car,'blue');
console.log(car);

let arr = [1,2,3];
console.log(Object.prototype.toString(arr));
console.log(Array.isArray(arr));
console.log(arr instanceof Array);
console.log(typeof arr);

function debounce(fn, wait) {
    var timeout = null;
    return function() {
        if(timeout !== null) 
                clearTimeout(timeout);
        timeout = setTimeout(fn, wait);
    }
}
// 处理函数
function handle() {
    console.log(Math.random()); 
}
// 滚动事件
window.addEventListener('scroll', debounce(handle, 1000));

var throttle = function(func, delay) {
    var timer = null;
    return function() {
        var context = this;
        var args = arguments;
        if (!timer) {
            timer = setTimeout(function() {
                func.apply(context, args);
                timer = null;
            }, delay);
        }
    }
}
function handle() {
    console.log(Math.random());
}
window.addEventListener('scroll', throttle(handle, 1000));