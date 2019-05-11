(function() {
    console.log(1);
    setTimeout(function(){console.log(2);}, 0);
    new Promise(function(resolve,reject){
        console.log(3)
        resolve(4)
    }).then(function(val){
        console.log(val);
    })
    console.log(5);
})();