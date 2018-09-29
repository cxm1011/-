function compare(value1,value2){
    console.log(arguments);
    console.log([...arguments]);
    if(value1 < value2){
        return -1;
    }else if(value1 > value2){
        return 1;
    }else{
        return 0;
    }
}
var result = compare(5,10);

function createFun(){
    var res = new Array();
    for(var i=0;i<10;i++){
        (res[i] = function(j){
            // 函数传参按值传递
           console.log(j)
        })(i)
    }
    return res;
}
//因为每个函数的作用域链中 都保存着 createFunctions()函数的活动对象，所以它们引用的都是同一个变量 i
var funArr = createFun();
// for(var fun of funArr){
//     fun();
// }