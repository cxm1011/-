function timer(ms){
    return new Promise((resolve,reject) => {
        setTimeout(resolve,ms,'done');
    })
}

timer(1000).then((data) => {
    console.log(data);
})