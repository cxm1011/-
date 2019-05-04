function inputChange(fn, delay = 2000) {
    let timer;
    return function () { 
        var context = this;
        var args = arguments;
        clearTimeout(timer)
        timer = setTimeout(function () {
            fn.apply(context, args);
        }, delay);
    }
}