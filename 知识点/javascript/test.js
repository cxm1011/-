var arr = ['foo',42,'bar'];
arr.baz = 'baz';
console.log(arr.length);  // 3
arr.push('ab');
console.log(arr.length);  // 4
// 给数组添加属性，属性名是个数字字符串，它会变为数字下标，同时改变数组的长度
arr['4'] = 'arr4';
console.log(arr.length);   // 5

var arr = ['a','b'];
for(var val in arr){
    console.log(val);
}

var obj = {
    a: '1',
    b: '2'
};
console.log(obj.a)

console.log(null == undefined);  // true
console.log(null === undefined); // false
console.log(typeof(new Object()) === typeof(null))  // true
console.log(new Number('1') == 1)  // true
console.log(new Number('1') === 1)  // false
console.log(new Boolean() == false)  // true

let arr1 = [1,2,3,4,5];
console.log(arr1.slice(1,-1));
for(let val of arr1){
    console.log('val of',val);
}
for(let val in arr1){
    console.log('val in',val);
}

console.log(Object.prototype.toString.call(arr1));
console.log(arr1 instanceof Array)

if(true) {
    var testSoft = 1;
}
console.log(testSoft);

let obj1 = {a:2};
let obj2 = {a:2};
console.log(obj1 === obj2);
console.log(JSON.stringify(obj1) === JSON.stringify(obj2));

