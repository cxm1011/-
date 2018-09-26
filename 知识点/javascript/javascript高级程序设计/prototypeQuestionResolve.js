function SuperType(){
    this.colors = ['red','blue','green'];
}
function SubType(){
    SuperType.call(this);
}

var instance1 = new SubType();
instance1.colors.push('black');
console.log(instance1.colors); // [ 'red', 'blue', 'green', 'black' ]

var instance2 = new SubType();
console.log(instance2.colors); // [ 'red', 'blue', 'green']
// 实际上是在(未来将要)新创建的 SubType 实例的环境下调用了 SuperType 构造函数。 
// 这样一来，就会在新 SubType 对象上执行 SuperType()函数中定义的所有对象初始化代码。
//结果， SubType 的每个实例就都会具有自己的 colors 属性的副本了。