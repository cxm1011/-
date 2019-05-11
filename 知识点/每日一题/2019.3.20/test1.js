var timer1 = (cb, time) => {
    (function loop() {
        setTimeout(loop, time);
        cb();
    })();
}
    
var timer2 = (cb, time) => {
    cb();
    setInterval(cb, time);
}

let cb = () => {
    console.log('abc');
}
timer1(cb,2000);