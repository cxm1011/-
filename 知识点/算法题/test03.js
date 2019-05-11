
// 
// function getStr(m,n){
//     if(m === 1) return n
//     return n+getStr(m-1,n);
// }

// let str = getStr(3,'m');
// console.log(str);

function getStr(m,n){
    if(m === 1) return n;
    let {str,i} = getStr2(m,n);
    m = m-i;
    return str+getStr(m,n);
}

function getStr2(m,n){
    let i = 2;
    let str = n;
    while(i<m){
        str += str;
        i = i*2;
    } 
    i = i/2;
    return {str,i};
}

let str = getStr(7,'k');
console.log(str);