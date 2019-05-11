/**
* 判断两个数组是否相同
* 说明：
*   1. 数组相同指数组长度和子项值均一致，子项顺序可不同
*   2. 数组均是一维数组，无需考虑数组嵌套
*   3. 返回比较结果，相同为true，反之为false
* 示例：
*   sameArray([1, 2, 3], [1, 2, 3]); // => true
*   sameArray([1, 2, 3], [3, 2, 1]); // => true
*   sameArray([1, 2, 3], [1, 2, 3, 4]); // => false
*   sameArray([1, 2, '3'], [1, 2, 3]); // => false
*   const obj = { foo: 3 };
*   sameArray([1, 2, obj], [1, 2, obj]); // => true
*   sameArray([1, 1, 1, 2], [2, 2, 2, 1]): // => false
*/


function sameArray(arr1,arr2){
    let len1 = arr1.length;
    let len2 = arr2.length;
    if(len1 !== len2) return false;
    if(len1 === 0 && len2 === 0) return true;
    arr1 = arr1.sort();
    arr2 = arr2.sort();
    for(let i=0;i<len1;i++){
        if(arr1[i] !== arr2[i]){
            return false;
        }
    }
    return true;
}
console.log(sameArray([1, 2, 3], [1, 2, 3]));
console.log(sameArray([1, 2, 3], [3, 2, 1]));
console.log(sameArray([1, 2, 3], [1, 2, 3, 4])); // => false
console.log(sameArray([1, 2, '3'], [1, 2, 3])); // => false
const obj = { foo: 3 };
console.log(sameArray([1, 2, obj], [1, 2, obj])); // => true
console.log(sameArray([1, 1, 1, 2], [2, 2, 2, 1]));// => false