# 1.对象复制
let obj = {
    a: 1,
    b: {
        c:2
    }
}
// 1) 直接拷贝  浅拷贝第一种情况 两个变量obj 和 obj2 之间还是会相互影响。
// let obj2 = obj;  // 对象浅拷贝 拷贝过后一个对象值的改变会影响另一个对象中的值
// obj.a = 11;
// console.log(obj2.a);  // 11
// obj2.b.c = 21;
// console.log(obj.b.c);  // 21

// 2）Object.assign  浅拷贝第二种情况。只是简单的拷贝对象的第一层属性，基本类型值不再相互影响，但是对其内部的引用类型值，拷贝的任然是是其引用，内部的引用类型值还是会相互影响。
// 也是只拷贝值，不过一个对象中值的改变不会影响另一个对象中的值。但是一个对象的对象中的值改变则会
// 影响另一个对象的对象中的值。因为Object.assign拷贝对象中的对象也仅拷贝引用值
// let obj3 = Object.assign({},obj);
// obj.a = 11;
// console.log(obj3.a);  // 1
// obj3.b.c = 21;
// console.log(obj.b.c);  // 21

// 3）深拷贝
// 缺陷； 1）对象必须遵从JSON的格式  2） ，所有函数及原型成员都会被有意忽略，不体现在结果中，
// 也就是说这种方法不能拷贝对象中的函数。此外，值为 undefined 的任何属性也都会被跳过
// let obj4 = JSON.parse(JSON.stringify(obj));
// obj.a = 11;
// console.log(obj4.a);  // 1
// obj4.b.c = 21;
// console.log(obj.b.c);  // 2

# 2.数组复制
var array = [1, 'string', {a: 1,b: 2, obj: {c: 3}}];

//循环
let array0 = [];
for(let val of array){
    array0.push(val);
}
// slice()
var array1 = array.slice();
// concat()
var array2 = array.concat();

let array4 = [...array]; //只能拷贝值 对象只能拷贝引用

let array5 = JSON.parse(JSON.stringify(array));; //深拷贝
// 改变原数组元素
array[1] = 'newString';
array[2].obj.c = 4;


console.log(array0[1]); // string
console.log(array0[2].obj.c); // 4

console.log(array1[1]); // string
console.log(array1[2].obj.c); // 4

console.log(array2[1]); // string
console.log(array2[2].obj.c); // 4

console.log(array4);
console.log(array4[1]); // string
console.log(array4[2].obj.c); // 4

console.log(array5);
console.log(array5[1]); // string
console.log(array5[2].obj.c); // 3

