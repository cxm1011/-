function getObjValue(){
    const args = [...arguments];
    const obj = args[0];
    const params = args.slice(1);
    let res = [];
    params.forEach((value,index) => {
        const paramsArr = value.split('.');
        console.log(paramsArr);
        let tempAns = obj;
        for(var i=0;i<paramsArr.length;i++ ){
            if(paramsArr[i].includes('[')){
                tempAns = getArrValue(tempAns,paramsArr[i]);
            }else{
                tempAns = tempAns[paramsArr[i]];
            }
            if(!tempAns) break;
        }
        res.push(tempAns);
    })
    return res;
}

function getArrValue(obj,arr){
    const left = arr.indexOf('[');
    const right = arr.indexOf(']');
    const leftVal = arr.slice(0,left);
    const rightVal = arr.slice(left+1,right);
    return obj[leftVal][rightVal];
}

const obj = {
    aa: {bb: 'cc'},
    arr: [1,3,5]
}

const res = getObjValue(obj,'aa.bb','arr[2]','arr[1]');
console.log(res);