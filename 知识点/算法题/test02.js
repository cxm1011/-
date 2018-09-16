let state = {
    a:2,
    b:3
};
let caption = 'a';
let state1 = {...state,'a':state[caption]+1};
console.log(state1);

console.log([].slice(1));