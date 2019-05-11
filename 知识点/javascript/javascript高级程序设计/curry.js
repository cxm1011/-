// function curry(fn){
//     console.log('args1');
//     console.log(arguments);
//     var args = Array.prototype.slice.call(arguments,1);
//     console.log(args);
//     return function(){
//         console.log('args2');
//         console.log(arguments);
//         var innerArgs = Array.prototype.slice.call(arguments);
//         console.log(innerArgs);
//         var finalArgs = args.concat(innerArgs);
//         console.log(finalArgs);
//         return fn.apply(null,finalArgs);
//     }
// }

// function add(num1,num2){
//     return num1+num2;
// }

// var curryAdd = curry(add,5);
// console.log(curryAdd(3));


//
var add = function(x){
    console.log(x);
    return function(y){
        return x+y;
    }
}
let increment = add(1)(2);
console.log(increment);

var add = (x) => (y) => x+y;
console.log(add(2)(3));

function add2(a,b,c,d){
    return a+b+c+d;
}
let args = [1,2,3,4];
console.log(add2(...args));