console.log(Object.prototype.toString.call(null));
let arr = [];
console.log(arr instanceof Array);
console.log(Object.prototype.toString.call(arr));

if([] instanceof Object){
    console.log('hello');
}else{
    console.log('world');
}

var a = 1;
function output(){
    console.log(a);
    var  a = 2;
    console.log(a);
}
output();