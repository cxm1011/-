let reg = /ab{2,4}c/g;
var str = 'abc abbc abbbc  ac';
console.log(str.match(reg));