# 面向对象的程序设计
1.创建对象
1）先创建Object实例，再为它添加属性和方法
var person = new Object();
person.name = "Nicholas";
person.age = 29;
person.job = "Software Engineer";
person.sayName = function(){
    alert(this.name);
};

2）对象字面量成为创建这种对象的首选模式
var person = {
    name: "Nicholas",
    age: 29,
    job: "Software Engineer",
    sayName: function(){
        alert(this.name);
    } 
};

2.属性类型
ECMAScript 中有两种属性:数据属性和访问器属性
1) 数据属性
[[Configurable]]:表示能否通过 delete 删除属性从而重新定义属性，能否修改属性的特
性，或者能否把属性修改为访问器属性。像前面例子中那样直接在对象上定义的属性，它们的
这个特性默认值为 true。且设置为false后就不能再改回去了
[[Enumerable]]:表示能否通过 for-in 循环返回属性。像前面例子中那样直接在对象上定
义的属性，它们的这个特性默认值为 true。
[[Writable]]:表示能否修改属性的值。
[[Value]]:包含这个属性的数据值。读取属性值的时候，从这个位置读;写入属性值的时候，
把新值保存在这个位置。这个特性的默认值为 undefined。

要修改属性默认的特性，需使用Object.defineProperty()方法。这个方法 接收三个参数:属性所在的对象、属性的名字和一个描述符对象

2) 访问器属性
 getter 和 setter 函数

3.使用构造函数问题
使用构造函数的主要问题，就是每个方法都要在每个 实例上重新创建一遍。在前面的例子中，person1 和 person2 都有一个名为 sayName()的方法，但那 两个方法不是同一个 Function 的实例

解决方法：我们创建的每个函数都有一个 prototype(原型)属性，这个属性是一个指针，指向一个对象， 而这个对象的用途是包含可以由特定类型的所有实例共享的属性和方法。不必在构造函数中定义对象实例的信息，而是 可以将这些信息直接添加到原型对象中，如下面的例子所示。
function Person(){
}
Person.prototype.name = "Nicholas";
Person.prototype.age = 29;
Person.prototype.job = "Software Engineer";
Person.prototype.sayName = function(){
    alert(this.name);
};
var person1 = new Person();
person1.sayName();   //"Nicholas"
var person2 = new Person();
person2.sayName(); //"Nicholas"
alert(person1.sayName == person2.sayName);  //true

与构造函数模式不同的是，新对象的这些属性和方法是由所有实例共享的。换句话说， person1 和 person2 访问的都是同一组属性和同一个 sayName()函数。

4.理解原型对象
当调用构造函数创建一个新实例后，该实例的内部将包含一个指针(内部 属性)，指向构造函数的原型对象。而不是构造函数！
ECMA-262 第 5 版中管这个指针叫[[Prototype]]。虽然在脚本中 没有标准的方式访问[[Prototype]]，但 Firefox、Safari 和 Chrome 在每个对象上都支持一个属性 __proto__;
图6-1 很重要

 isPrototypeOf()方法来确定对象之间是否存在这种关系。从本质上讲，如果[[Prototype]]指向调用 isPrototypeOf()方法的对象 (Person.prototype)，那么这个方法就返回 true，如下所示:
alert(Person.prototype.isPrototypeOf(person1)); //true
 alert(Person.prototype.isPrototypeOf(person2)); //
 
 ECMAScript 5增加了一个新方法，叫Object.getPrototypeOf()，在所有支持的实现中，这个 方法返回[[Prototype]]的值。例如:
alert(Object.getPrototypeOf(person1) == Person.prototype); //true 
alert(Object.getPrototypeOf(person1).name); //"Nicholas"

Object.getPrototypeOf()返回的对象实际就是这个对象的原型

使用 hasOwnProperty()方法可以检测一个属性是存在于实例中，还是存在于原型中。
in 操作符会在通 过对象能够访问给定属性时返回 true，无论该属性存在于实例中还是原型中。
同时使用 hasOwnProperty()方法和 in 操作符，就可以确定该属性到底是存在于对象中，还是存在于 原型中，如下所示。
    function hasPrototypeProperty(object, name){
        return !object.hasOwnProperty(name) && (name in object);
}
