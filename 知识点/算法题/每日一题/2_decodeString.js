/**
 * 说明：给定一个编码字符，按编码规则进行解码，输出字符串
 *     编码规则是`count[letter]`，将letter的内容count次输出，count是0或正整数，letter是区分大小写的纯字母
 * 示例：
 * const s = '3[a]2[bc]'; decodeString(s); // 返回'aaabcbc'
 * const s = '3[a2[c]]'; decodeString(s); // 返回'accaccacc'
 * const s = '2[abc]3[cd]ef'; decodeString(s); // 返回'abcabccdcdcdef'  abcabccdcdcdef
 */


 // 解题思路： 使用栈。遍历字符串S,遇到非‘]’入栈，当遇到’]‘出栈，直到遇到'['，将左右综括号中的值保存在tempVal（注意顺序）,
 // ，继续出栈，获取‘[’外的数字num，此时将tempVal复制num次得到tempRes，将数字出栈并将tempRes入栈。遍历结束后需组装栈中的值，
 // 注意下顺序即可

 // 复杂度： 时间复杂度O(n)  空间复杂度O(n)
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
    this.dataStore[--this.top];
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

function decodeString(s){
    let stack = new Stack;
    let res = '';
    let tempRes = '';
    for(let val of s){
        if(val !== ']'){
            stack.push(val);
        }else{
            let tempVal = '';
            let peekVal = stack.peek()
            while(peekVal !== '['){
                stack.pop();
                tempVal = peekVal+tempVal;  // 注意顺序
                peekVal = stack.peek();
            }
            stack.pop();
            tempRes = copy(tempVal,stack.peek());
            stack.pop();
            stack.push(tempRes);
        }
    }
    
    while(stack.peek()){
        tempRes = stack.peek();
        res = tempRes+res;  // 注意顺序
        stack.pop();
    }
    return res;
 }

function copy(val,num){
    let res = '';
    for(let i =0;i<num;i++){
        res += val;
    }
    return res;
}

console.log(decodeString('3[a]2[bc]'));
console.log(decodeString('3[a2[c]]'));
console.log(decodeString('2[abc]3[cd]ef'));
