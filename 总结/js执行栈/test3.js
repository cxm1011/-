console.log(1)

// set1
setTimeout(() => {
  console.log(2)
  // pro1
  new Promise(resolve => {
    console.log(4)
    resolve()
  }).then(() => {
    console.log(5)
  })
})

// pro2
new Promise(resolve => {
  console.log(7)
  resolve()
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
