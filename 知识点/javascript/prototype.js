let anothderObj = {
    a: 2
}

let myObj = Object.create(anothderObj);
console.log(myObj.a);  // 找原型的属性
myObj.a++;  // 不会修改原型上的属性
console.log(myObj.a)  // 3
console.log(anothderObj.a) //2 