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

