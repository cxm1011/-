let arr1 = [10,20,3,9,5];
//默认情况下sort()方法没有传比较函数的话，默认按字母升序，如果不是元素不是字符串的话，
// 会调用toString()方法将元素转化为字符串的Unicode(万国码)位点，然后再比较字符。
console.log('arr1.sort()', arr1.sort());
console.log('arr1', arr1);

//sort的比较函数有两个默认参数，要在函数中接收这两个参数，这两个参数是数组中两个要比较的元素，
//通常我们用 a 和 b 接收两个将要比较的元素：

// 若比较函数返回值<0，那么a将排到b的前面;
// 若比较函数返回值=0，那么a 和 b 相对位置不变；
// 若比较函数返回值>0，那么b 排在a 将的前面；
let arr2 = [10,20,3,9,5];
arr2.sort((a,b) => {
    return a-b;
})
console.log('arr2', arr2);

console.log('arr2 reverse',arr2.reverse());