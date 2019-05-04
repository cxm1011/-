// pop() 删除一个数组中的最后的一个元素
let  a =  [1,2,3];
let item = a.pop();  // 3
console.log(item);
console.log(a); // [1,2]

let  a1 =  [1,2,3];
let item1 = a1.shift();  // 1
console.log(item1);
console.log(a1); // [2,3]


let  a2 =  [1,2,3];
let item2 = a2.push('末尾');  // 4
console.log(item2);
console.log(a2); // [1,2,3,'末尾']

let  a3 =  [1,2,3];
let item3 = a3.unshift('开头');  // 4
console.log(item3);
console.log(a3); // ['开头',1,2,3]


