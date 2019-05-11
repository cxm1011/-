console.log(1)

// set1
setTimeout(() => {
  console.log(2)
  new Promise(resolve => {
    console.log(4)
    resolve()
    // pro1
  }).then(() => {
    console.log(5)
  })
})

new Promise(resolve => {
  console.log(7)
  resolve()
  // pro2
}).then(() => {
  console.log(8)
})

// set2
setTimeout(() => {
  console.log(9)
  // pro3
  new Promise(resolve => {
    console.log(11)
    resolve()
  }).then(() => {
    console.log(12)
  })
})
