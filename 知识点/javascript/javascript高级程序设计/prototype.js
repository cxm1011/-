function Person(){

}
Person.prototype.name = 'abc';
Person.prototype.age = 29;
Person.prototype.job = 'software';
Person.prototype.sayName = function(){
    console.log(this.name);
};
let person1 = new Person();
person1.sayName();

let person2 = new Person();
person2.sayName();

console.log(person1.sayName === person2.sayName) //true


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

