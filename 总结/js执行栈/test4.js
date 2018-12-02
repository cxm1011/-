// asy1
async function async1(){
    console.log('a');
    await fn();
    console.log('b');
}

//asy2
async function fn() {
    new Promise((resolve,reject) => {
        console.log('i');
        resolve();
         // pro1then1
    }).then(function then1(){
        console.log('j')
        // pro1then2
    }).then(function then2(){
        console.log('k')
    })
}

console.log('d');
// set1
setTimeout(function cb(){
    console.log('e')
},0);

async1();

new Promise(function (resolve){
    console.log('f');
    resolve();
    // pro2
}).then(function then3(){
    console.log('g');
}).then(function then4(){
    console.log('m');
});

console.log('h');
