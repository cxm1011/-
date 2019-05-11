var person = {
    name: "Nicholas",
    age: 29,
    job: "Software Engineer",
    sayName: function(){
        alert(this.name);
    } 
};

Object.defineProperty(person,"age",{
    writable:false
});
console.log(person.age);  // 29
person.age = 40;
console.log(person.age);  // 29

// 构造函数创建对象
function Person(name, age, job){
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = function(){
        alert(this.name);
}; }
var person1 = new Person("Nicholas", 29, "Software Engineer");
var person2 = new Person("Greg", 27, "Doctor");


//要创建 Person 的新实例，必须使用 new 操作符。以这种方式调用构造函数实际上会经历以下 4 个步骤:
// (1) 创建一个新对象;
// (2) 将构造函数的作用域赋给新对象(因此 this 就指向了这个新对象);
// (3) 执行构造函数中的代码(为这个新对象添加属性);
// (4) 返回新对象。

console.log(person1.constructor === Person);  //true