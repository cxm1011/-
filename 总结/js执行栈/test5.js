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

async1();