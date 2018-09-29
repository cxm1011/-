let arr = [1,5,10,20];
console.log(arr.sort()); //[ 1, 10, 20, 5 ]
console.log(arr.sort((a,b) => {
    return a-b>0;
})) // [ 1, 5, 10, 20 ]

console.log(arr.splice(0,2));
arr.splice(2,0,6,7);
console.log(arr);
arr.concat('a');
console.log(arr);
arr.splice(2,1,'a','a');
console.log(arr);

console.log(arr.indexOf('a'));  //2
console.log(arr.lastIndexOf('a'));  //3

console.log(arr.slice());  //[ 10, 20, 'a', 'a', 7 ]

var arr1 = [1,2,3,4,5,4,3,2,1];
var everyRes = arr1.every(function(value,index,arr1){
    return value>2;
})
console.log(everyRes);  // false

var someRes = arr1.some(function(value,index,arr1){
    return value>2;
})
console.log(someRes);  // true

var filterRes = arr1.filter(function(value,index,arr1){
    return value>2;
})
console.log(filterRes);  // [ 3, 4, 5, 4, 3 ]

var mapRes = arr1.map(function(value,index,arr1){
    return value>2;
})
console.log(mapRes); // [ false, false, true, true, true, true, true, false, false ]

var foreachRes = arr1.forEach(function(value,index,arr1){
    // console.log(value>2);  与for循环类似
})

console.log('********');
let arr2 = [1,3,5,7,9];
arr2.splice(2,2);
console.log(arr2);
arr2.concat('1');
console.log(arr2);
console.log(arr2.slice(1,2));
console.log(arr2);
