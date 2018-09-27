var getId = function(src){
    var promise = new Promise(function(resolve,reject){
        axios.post(src,param,function(data){
            if(data.resultCode === '000000'){
                resolve(data.data);
            }else{
                reject(data.resultMsg);
            }
        })
    });
    return promise;
}

var getIdPromise = getId(src);
var list = [];
getIdPromise.then(function(ids){
    ids.map((value) => {
        axios.post(src1,value,function(data){
            if(data.resultCode === '000000'){
                list.push(data.data);
            }else{
                alert(data.resultMsg);
            }
        })

        axios.post(src1,value)
            .then(function(data){
                if(data.resultCode === '000000'){
                    list.push(data.data);
                }else{
                    alert(data.resultMsg);
                }
            })

    })
},function(errorMsg){
    console.log(errorMsg)
})


axios.post(src1,value)
.then(function(data){
    if(data.resultCode === '000000'){
        list.push(data.data);
        return data;
    }else{
        alert(data.resultMsg);
    }
})
.then(function(ids){
    ids.map((value) => {
        axios.post(src1,value)
        .then(function(data){
            if(data.resultCode === '000000'){
                list.push(data.data);
            }else{
                alert(data.resultMsg);
            }
        })

    })
})