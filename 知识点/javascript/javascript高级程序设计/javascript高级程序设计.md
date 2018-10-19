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
eg:
var person = {};
Object.defineProperty(person, "name", {
    writable: false,
    value: "Nicholas"
});
alert(person.name); //"Nicholas" 
person.name = "Greg"; 
alert(person.name); //"Nicholas"

2) 访问器属性
 getter 和 setter 函数

创建对象
工厂模式
function createPerson(name, age, job){
    var o = new Object();
    o.name = name;
    o.age = age;
    o.job = job;
    o.sayName = function(){
        alert(this.name);
    };
    return o; 
}
var person1 = createPerson("Nicholas", 29, "Software Engineer"); 
var person2 = createPerson("Greg", 27, "Doctor");

构造函数模式
 function Person(name, age, job){
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = function(){
        alert(this.name);
    }; 
}
var person1 = new Person("Nicholas", 29, "Software Engineer");
var person2 = new Person("Greg", 27, "Doctor");
要创建 Person 的新实例，必须使用 new 操作符。以这种方式调用构造函数实际上会经历以下 4 个步骤:
(1) 创建一个新对象;
(2) 将构造函数的作用域赋给新对象(因此 this 就指向了这个新对象);
(3) 执行构造函数中的代码(为这个新对象添加属性);
(4) 返回新对象。

alert(person1 instanceof Object);  //true
alert(person1 instanceof Person);  //true
alert(person2 instanceof Object);  //true
alert(person2 instanceof Person);  //true
创建自定义的构造函数意味着将来可以将它的实例标识为一种特定的类型;而这正是构造函数模式 胜过工厂模式的地方

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

5.原型的动态性
1）创建实例再修改原型，也可以访问到修改原型后的方法
var friend = new Person();
Person.prototype.sayHi = function(){
    alert("hi");
};
friend.sayHi(); //"hi"(没有问题!)


2）但是重写整个原型对象，则不行。图6-3很重要
function Person(){
}
var friend = new Person();
Person.prototype = {
    constructor: Person,
    name : "Nicholas",
    age : 29,
    job : "Software Engineer",
    sayName : function () {
        alert(this.name);
    }
};
friend.sayName();   //error

6.原型对象的问题
最大的问题是由其共享的本性所导致的。
对于包含引用类型值的属性来说，问题就比较突出了。eg:
function Person(){
}
Person.prototype = {
    constructor: Person,
    name : "Nicholas",
    age : 29,
    job : "Software Engineer",
    friends : ["Shelby", "Court"],
    sayName : function () {
        alert(this.name);
} };
var person1 = new Person();
var person2 = new Person();
person1.friends.push("Van");
alert(person1.friends);    //"Shelby,Court,Van"
alert(person2.friends);    //"Shelby,Court,Van"
alert(person1.friends === person2.friends);  //true

//组合使用构造函数模式和原型模式
//构造函数模式用于定义实 例属性，而原型模式用于定义方法和共享的属性。结果，每个实例都会有自己的一份实例属性的副本， 
//但同时又共享着对方法的引用，最大限度地节省了内存。另外，这种混成模式还支持向构造函数传递参数;可谓是集两种模式之长。
function Person1(name,age,job){
    this.name = name;
    this.age = age;
    this.job = job;
    this.friends = ['abc','def'];
}

Person1.prototype = {
    constructor: Person1,
    sayName: function(){
        console.log(this.name);
    }
}

var person11 = new Person1('jj',22,'qq');
var person12 = new Person1('kk',22,'ll');
console.log(person11.friends);
console.log(person12.friends);
console.log(person11.friends === person12.friends);  //false
console.log(person11.sayName === person12.sayName); //true

7.继承
原型链作为实现继承的主要方法。其基本思想是利用原型让一个引用类型继承另一个引用类型的属性和方法

function SuperType(){
    this.property = true;
}
SuperType.prototype.getSuperValue = function(){
    return this.property;
}

function SubType(){
    this.subproperty = false;
}
SubType.prototype = new SuperType();  // 实现继承，实现的本质是重写原型对象，代之以一个新类型的实例
SubType.prototype.getSubValue = function(){
    return this.subproperty;
}

var instance = new SubType();
console.log(instance.getSuperValue());  // true
实例以及构造函数和原型之间的关系如图 6-4 所示

最终结果就是这样的:instance 指向 SubType 的原型，SubType 的原型又指向 SuperType 的原型
 instance.constructor 现在指向的 是 SuperType，这是因为原来 SubType.prototype 中的 constructor 被重写了的缘故

7.1 默认的原型
 所有函数的默认原型都是 Object 的实例，因此默认原 型都会包含一个内部指针，指向 Object.prototype。这也正是所有自定义类型都会继承 toString()、 valueOf()等默认方法的根本原因

7.2 原型和实例的关系
instanceof  这个操作符来测试实例与原型链中出现过的构造函数
alert(instance instanceof Object); //true
alert(instance instanceof SuperType); //true
alert(instance instanceof SubType);//true

isPrototypeOf()方法。同样，只要是原型链中出现过的原型，都可以说是该原型链所派生的实例的原型
alert(Object.prototype.isPrototypeOf(instance));  //true
alert(SuperType.prototype.isPrototypeOf(instance));  //true
alert(SubType.prototype.isPrototypeOf(instance));  //true

8.原型链的问题
1)第一个问题
引用类型值的原型属性会被所有实例共享，因此这也是为什么要在构造函数中，而不是在原型对象中定义属性的原因。在通过原型来实现继承
时，原型实际上会变成另一个类型的实例。于是，原先的实例属性也就成为了现在的原型属性了。
//  SubType 的所有实例都会共享这一个 colors 属性。
function SuperType(){
    this.colors = ['red','blue','green'];
}
function SubType(){

}
SubType.prototype = new SuperType();

var instance1 = new SubType();
instance1.colors.push('black');
console.log(instance1.colors); // [ 'red', 'blue', 'green', 'black' ]

var instance2 = new SubType();
console.log(instance2.colors); // [ 'red', 'blue', 'green', 'black' ]

2)第二个问题
在创建子类型的实例时，不能向超类型的构造函数中传递参数。没有办法在不影响所有对象实例的情况下，给超类型的构造函数传递参数

9.解决方法
借用构造函数
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

构造函数的问题：
如果仅仅是借用构造函数，那么也将无法避免构造函数模式存在的问题——方法都在构造函数中定 义，因此函数复用就无从谈起了。而且，在超类型的原型中定义的方法，对子类型而言也是不可见的，结 果所有类型都只能使用构造函数模式。

10.组合模式

function SuperType(name){
    this.name = name;
    this.colors = ['red','blue','green'];
}

SuperType.prototype.sayName = function(){
    console.log(this.name);
}

function SubType(name,age){
    SuperType.call(this,name);
    this.age = age;
}

SubType.prototype = new SuperType();
SubType.prototype.construcor = SubType;
SubType.prototype.sayAge = function(){
    console.log(this.age);
}

var instance1 = new SubType('kitty',22);
instance1.colors.push('black');
console.log(instance1.colors); // [ 'red', 'blue', 'green', 'black' ]
instance1.sayName(); // kitty
instance1.sayAge();  // 22

var instance2 = new SubType('tom',29);
console.log(instance2.colors); // [ 'red', 'blue', 'green' ]
instance2.sayName(); // kitty
instance2.sayAge();  // 29

11.函数表达式

function(){
    // 会报错。 是因为 JavaScript 将 function 关键字当作一个函数声明的开始，而函 数声明后面不能跟圆括号。然而，函数表达式的后面可以跟圆括号。要将函数声明转换成函数表达式， 12 只要像下面这样给它加上一对圆括号即可
}()


(function(){
    console.log('函数声明不会报错....');
})()

初始化未经声明的变量，总是会创建一个全局变量

12.web存储机制
1）sessionStorage
存储特定于某个会话的数据，也就是该数据只保持到浏览器关闭。
setItem  getItem

2) globalStorage
跨越会话存储数据。首先需指定哪些域可以访问该数据

3）localStorage
与globalStorage不同的是，不能给localStorage指定任何访问规则。数据保留到通过js删除或者是用户清除浏览器缓存

13.Object的每个实例都有的属性和方法
* constructor: 保存着用于创建当前对象的函数。
* hasOwnProperty(propertyName):用于检查给定的属性在当前对象实例中(而不是在实 例的原型中)是否存在。其中，作为参数的属性名(propertyName)必须以字符串形式指定(例 如:o.hasOwnProperty("name"))。
* isPrototypeOf(object):用于检查传入的对象是否是当前对象的原型(第 5 章将讨论 原型)。
* propertyIsEnumerable(propertyName):用于检查给定的属性是否能够使用for-in语 句(本章后面将会讨论)来枚举。
* toLocaleString():返回对象的字符串表示，该字符串与执行环境的地区对应。
* toString():返回对象的字符串表示。
* valueOf():返回对象的字符串、数值或布尔值表示。通常与 toString()方法的返回值相同。

