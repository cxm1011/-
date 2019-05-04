function SuperType(){
    this.property = true;
}

SuperType.prototype.getSuperValue = function() {
    return this.property;
}

function SubType(){
    this.subproperty = false;
}

SubType.prototype = new SuperType();

SuperType.prototype.getSubValue = function(){
    return this.subproperty;
}

var instance = new SubType();
console.log(instance.getSuperValue());