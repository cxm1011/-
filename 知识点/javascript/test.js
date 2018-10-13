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