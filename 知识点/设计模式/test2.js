Function.prototype.before = function( beforefn ){
    var __self = this; // 保存原函数的引用
    console.log('this1: ',this);
    return function(){ // 返回包含了原函数和新函数的"代理"函数
        beforefn.apply( this, arguments ); 
        console.log('this2: ');
        return __self.apply( this, arguments );
    }
}
Function.prototype.after = function( afterfn ){ 
    var __self = this;
    console.log('this3: ');
    return function(){
        var ret = __self.apply( this, arguments ); 
        console.log('this4: ');
        console.log('ret: ',ret);
        afterfn.apply( this, arguments );
        // return ret;
    } 
};
var func = function(){ 
    console.log( 2 );
};
    
func = func.before(function(){ 
    console.log( 1 );
    }).after(function(){ 
        console.log( 3 );
    }).before(function(){
        console.log(4);
    }); 
console.log('func:',func);
func();