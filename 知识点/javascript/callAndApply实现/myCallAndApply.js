let a = {
    value: 1
}
function getValue(name,age){
    console.log(name);
    console.log(age);
    console.log(this.value);
}
// getValue.call(a,'cxm',28);
// getValue.apply(a,['cxm',28]);


//模拟实现 call 和 apply
// 可以从以下几点来考虑如何实现

// 不传入第一个参数，那么默认为 window
// 改变了 this 指向，让新的对象可以执行该函数。那么思路是否可以变成给新的对象添加一个函数，然后在执行完以后删除？
Function.prototype.myCall = function(context) {
    var context = context || window;
    context.fn = this;
    console.log('myCall arguments',arguments)
    let args = [...arguments].slice(1);  //空数组的slice(1)返回空数组，对空数组解构赋值不报错
    console.log('myCall arguments',args)
    let result = context.fn(...args); // 对空数组解构赋值不报错。所以不需要判断
    delete context.fn;
    return result;
}

getValue.myCall(a,'cxm','27');

Function.prototype.myApply = function(context){
    var context = context || window;
    context.fn = this;
    let result;
    // 因为apply参数是一个数组，对数组结构首先需要拿到数组，所以要进行arguments[1]操作
    // arguments[1]有可能是undefined.对undefined解构赋值会报错。所以要加上判断
    // 首先得拿到数组中的所有值。与call不同
    if(arguments[1]){
        console.log(arguments[1]);
        result = context.fn(...arguments[1]);
    }else{
        result = context.fn();
    }
    delete context.fn;
    return result;
}
getValue.myApply(a,['a','27']);

Function.prototype.myBind = function(context){
    if(typeof this !== 'function'){
        throw new TypeError('error');
    }
    var _this = this;
    var args = [...arguments].slice(1);
    return function F(){
        // 因为返回了一个函数，我们可以 new F()，所以需要判断
        // if(this instanceof F){
        //     return new _this(...args,...arguments);
        // }
        return _this.apply(context,args.concat(...arguments));
    }
}

var test = function(a,b){
    console.log('作用域绑定 '+ this.value)
    console.log('testBind参数传递 '+ a.value2)
    console.log('调用参数传递 ' + b)
}
    
var obj = {
    value:'ok'
}
var fun_new = test.myBind(obj,{value2:'also ok'});
// fun_new ('hello bind');
let fun = new fun_new('abc');
// fun('def');