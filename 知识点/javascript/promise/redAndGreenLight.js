function red(){
    console.log('red');
}

function green(){
    console.log('green');
}

function yellow(){
    console.log('yellow');
}

var light = function(cb,timer){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            cb();
            //resolve(); // resolve()执行后会将promise的pedding状态转为fulfilled状态。所以执行then方法中的第一个函数
            reject('123');  // 只执行catch中的方法
        },timer)
    })
}

var step = function(){
    Promise.resolve().then(function(){
        return light(red,500);
    }).then(function(data){
        console.log('data: '+data);
        return light(green,1000);
    }).then(function(){
        return light(yellow,1500);
    }).then(function(){
        step();
    }).catch((data) => {
        console.log('rejectcatch: ' + data);
    })
}

step();