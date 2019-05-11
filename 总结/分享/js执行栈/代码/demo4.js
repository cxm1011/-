
console.log('a')

// set1
setTimeout(() => {
  console.log('b')
  new Promise(resolve => {
    console.log('c')
    resolve();
     // pro1
  }).then(() => {
    console.log('d')
  })
})

new Promise(resolve => {
  console.log('e')
  resolve();
  // pro2
}).then(() => {
  console.log('f')
})

// set2
setTimeout(() => {
  console.log('g')
  new Promise(resolve => {
    console.log('h')
    resolve();
    // pro3
  }).then(() => {
    console.log('i')
  })
})


