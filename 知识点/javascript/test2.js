// let a =[];
// let b = {};
// let c = {};
// function f(a,b,c){
//     a = [1];
//     b= [2];
//     c= {val: 3};
// }
// f(a,b,c);
// console.log(a,b,c.val);

// console.log(["20"+10,"20"-10,+"2s"+10],{a:1}+10)

let a = 'a';
console.log(a instanceof Object);
let b = {a: '1'};
console.log(b instanceof Object);

let c = 1;
let d = Number(1);
let e = Number('1');  
let f = new Number(1);
console.log(Object.prototype.toString.call(c));  // [object Number]
console.log(Object.prototype.toString.call(d));  // [object Number]
console.log(Object.prototype.toString.call(e));  // [object Number]
console.log(Object.prototype.toString.call(f));  // [object Number]
console.log(typeof c); // number
console.log(typeof d); // number
console.log(typeof e); // number
console.log(typeof f);  // object
console.log(c instanceof Number);  // false
console.log(d instanceof Number);  // false
console.log(e instanceof Number);  // false
console.log(f instanceof Number);  // true
console.log(d === e)  // true