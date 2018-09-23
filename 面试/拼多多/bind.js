var a = 1;
var obj = {
    a:2,
    c:function(){
        console.log(this);
        console.log(this.a);
    }
}
var o = obj.c;
// obj.c();  // 2
// o();  // undefined  因为处于严格模式下

var bindO = o.bind(obj);
bindO();  // 2

Function.prototype.myBind = function (context) {
    if (typeof this !== 'function') {
      throw new TypeError('Error')
    }
    console.log('this');
    console.log(this);
    var _this = this;
    console.log('arguments');
    // arguments是个对象，所以使用...arguments解构，变为参数序列，[...arguments]构成数组,可以使用slice方法
    var args = [...arguments].slice(1);
    console.log(...arguments);
    // 返回一个函数
    return function F() {
      // 因为返回了一个函数，我们可以 new F()，所以需要判断
      if (this instanceof F) {
        return new _this(...args, ...arguments)
      }
      return _this.apply(context, args.concat(...arguments))
    }
  }

var myBindO = o.myBind(obj);
myBindO();

