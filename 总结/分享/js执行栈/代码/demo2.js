
function sleep(d){
    for(var t = Date.now();Date.now() - t <= d;);
}
setTimeout(() => {
    console.log('a');
},3000);
console.log('b');
sleep(5000);


