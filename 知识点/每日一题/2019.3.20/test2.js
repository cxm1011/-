function gtn(listArr) {
    var getObjType = Object.prototype.toString;
    var res = {};
    listArr.forEach(item => {
      var key = getObjType.call(item).split(' ')[1].slice(0, -1);
      res[key] = (res[key] || 0) + 1;
    });
    return res;
  }
let arr = ['19','10']
  console.log(gtn(arr))