function Person(name,age,job){
    this.name = name;
    this.age = age;
    this.job = job;
}

var person = new Person('kitty',29,'software');
console.log(person.name);  // kitty

// 当没有new操作符来调用构造函数时，由于this对象是在运行时绑定的，所以直接调用
// Person()会映射到全局对象window上，导致错误对象属性的意外增加

//作用域安全的构造函数在进行任何更改前，首先确认 this 对象是正确类型的实例。
//如果不是，那 么会创建新的实例并返回
var person2 = Person2("Nicholas", 29, "Software Engineer");
console.log(name);  // Nicholas

function Person2(name,age,job){
    if(this instanceof Person2){
        this.name = name;
        this.age = age;
        this.job = job;
    }else{
        return new Person2(name,age,job);
    }
    
}