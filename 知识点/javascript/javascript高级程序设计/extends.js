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

