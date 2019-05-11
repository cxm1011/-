// console.log(Object.prototype.toString.call([1,2,3]));

let f = function getName(){
    console.log(1);

}
f.apply(null,null).apply(null,null);

// let f1 = function f(){
//     getName('cxm1');
//     return getName('cxm2');
// }
// let f2 = f1();
// console.log(f2);
// f2();
// setTimeout(function(){
//     f1();
// },1000);

