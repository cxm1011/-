var timer1 = (cb, time) => {
(function loop() {
cb();
setTimeout(loop, time);
})();
}

var timer2 = (cb, time) => {
cb();
setInterval(cb, time);
}
1、timer1和timer2实现了什么功能，执行结果上会有什么区别
timer1，timer2实现了定时器功能
2、模拟requestAnimationFrame方法的话应该参照那种实现
3、timer1中调换cb()和setTimeout的先后顺序会有什么影响
没有影响







function gtn(listArr) {
  var getObjType = Object.prototype.toString;
  var res = {};
  listArr.forEach(item => {
    var key = getObjType.call(item).split(' ')[1].slice(0, -1);
    res[key] = (res[key] || 0) + 1;
  });
  return res;
}
1、第5行中 key 和 item 是什么关系， 用正则表达式 实现该功能
2、第6行的作用是什么？
3、怎么提高上面函数的健壮性









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

1、上面代码执行后打印的结果是什么，为什么
1 3 5 4 2
宏任务微任务
2、用自执行函数包裹执行代码可以解决什么问题
形成封闭作用域，防止变量污染全局









for(var i=0;i<5;i++){
    setTimeout(function(){   
      console.log(i);
    },i*1000)
}

上述代码的输出的结果是什么？
每隔1秒输出5，共输出5个5















function abc(inputString) {
  
}

函数 abc 用来剔除字符串中连续出现的重复字符，比如接受aaabbcccdc，返回abcdc。
补充一下实现逻辑

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










在一个空白页面上，创建100个元素，给每个元素一个独立的背景色，点击每个元素时，被点元素背景色保持不变，其他元素的背景色必须全部发生变化并且这100个元素的背景色不能重复。a、建议使用react或vue实现
b、推荐使用随机色做背景


generateArr = () => {
    let select = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
    let colors = [];
    for(let i=0;i<100;){
        let temp = '';
        for(let j=0;j<6;j++){
            let random = Math.getRandom()*15;
            temp += select[random];
        }
        if(res.indexOf(temp) === -1){
            colors.push(temp)
            i++
        }
    }
    this.setState({
        colors
    })
}

onClick = (id) => {
    let select = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
    let res = [];
    let {colors} = this.state;
    for(let i=0;i<100;){
        let temp = '';
        if(i === id){
            res[id] = colors[i];
        }
        for(let j=0;j<6;j++){
            let random = Math.getRandom()*15;
            temp += select[random];
        }
        if(res.indexOf(temp) === -1 && temp !== colors[i]){
            res.push(temp)
            i++
        }
    }
    this.setState({
        colors: res
    })
}








