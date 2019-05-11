let arr = [1,2,3,4,5];
let sum = arr.reduce((sum,index) => {
    return sum+index
},0)
console.log(sum)

console.log('abc'.split('').reverse().join(''));

console.log(arr.unshift(10))