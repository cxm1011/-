let str = '?abc=123&def=456';
console.log(str.split('&'));
for(let val of str.split('&')){
    console.log(val.split('='));
}
console.log(str.split('=')[1]);