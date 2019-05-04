let arr1 = [1,2,3,4,5];
// 删除
let spliceArr1 = arr1.splice(2,3);
console.log('arr1',arr1);
console.log('spliceArr1',spliceArr1);
// 插入
let arr2 = [1,2,3,4,5];
let spliceArr2 = arr2.splice(2,0,7);
console.log('arr2',arr2);
console.log('spliceArr2',spliceArr2);
// 替换
let arr3 = [1,2,3,4,5];
let spliceArr3 = arr3.splice(2,3,7);
console.log('arr3',arr3);
console.log('spliceArr3',spliceArr3);

// 负数则最后一位为-1
let arr4 = [1,2,3,4,5];
let spliceArr4 = arr4.splice(-10,3);
console.log('arr4',arr4);
console.log('spliceArr4',spliceArr4);