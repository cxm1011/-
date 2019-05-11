let arr = [2,3,4,1];
arr = arr.sort(arr);
console.log(arr);

function Stack(){
    this.dataStore = [];
    this.top = 0;
    this.push = push;
    this.pop = pop;
    this.peek = peek;
    this.length = length;
    this.clear = clear;
}

function push(element){
    this.dataStore[this.top++] = element;
}

function pop(){
    --this.top;
    console.log(this.top);
    this.dataStore[this.top];
}
function peek(){
    return this.dataStore[this.top-1];
}
function length(){
    return this.top;
}
function clear(){
    this.top = 0;
}


let stack = new Stack();
stack.push(2);
stack.push('a');
stack.push(8);
stack.push(',');
console.log(stack.peek());