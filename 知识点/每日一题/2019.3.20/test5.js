function abc(inputString) {
  let strArr = inputString.split('');
  let res = [];
  for(let i=0;i<strArr.length;i++){
    if(res.indexOf(strArr[i]) === -1){
        res.push(strArr[i]);
    }
  }
  return res.join('');
}

console.log(abc('eee'))