let arr = [1,2,3,4];
let newArr = [7,8,9];
arr.splice(2,0,...newArr);  // splice() 方法向/从数组中添加/删除项目，然后返回被删除的项目。
console.log(arr); // [ 1, 2, 7, 8, 9, 3, 4 ]