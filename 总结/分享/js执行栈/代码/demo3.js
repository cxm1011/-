
console.log('a');
// set
setTimeout(() => { 
    console.log('b');
},0);

new Promise((resolve, reject) => {
  console.log('c');
  for (var i = 0; i < 10000; i++) {
    i == 9999 && resolve();
  }
  console.log('d');
  // pro
}).then(() => {
  console.log('e');
});

console.log('f');




