let arr = [1,2,3,2,3];
let arr1 = [new Set(...arr)];
console.log(arr1);

// let res = [];
// for(let i=0;i<arr.length;i++){
//     if(res.indexOf(arr[i]) === -1){
//         res.push(arr[i])
//     }
// }

// let res = [];
// for(let i=0;i<arr.length;i++){
//     if(!res.includes(arr[i])){
//         res.push(arr[i])
//     }
// }

let res = [];
for(let i=0;i<arr.length;i++){
    if(!res.includes(arr[i])){
        res.push(arr[i])
    }
}
console.log(res);