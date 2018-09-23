// forEach()只对当前值进行操作时，不会修改原数组内容
let arr = [1,3,5,7,9];
arr.forEach((val,index) => {
    val = val+1;
});
console.log(arr); // [1,3,5,7,9]

// .forEach()对数组原始值操作时，才会修改原数组内容
let arr1 = [1,3,5,7,9];
arr1.forEach((val,index) => {
    arr1[index] = val+1;
});
console.log(arr1); // [ 2, 4, 6, 8, 10 ]

// map会返回新数组，原数组不更改
let arr2 = [1,3,5,7,9];
let arr3 = arr2.map((val,index) => {
    return val+1;
});
console.log(arr2); // [1,3,5,7,9]
console.log(arr3);// [ 2, 4, 6, 8, 10 ]

// concat同样不会更改原数组，返回新数组
let arr4 = [1,3,5,7,9];
let arr5 = arr4.concat(1,2,3);
console.log(arr4); //[1,3,5,7,9]
console.log(arr5); // [ 1, 3, 5, 7, 9, 1, 2, 3 ]