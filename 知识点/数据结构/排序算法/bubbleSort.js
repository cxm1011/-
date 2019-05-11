

function exchange(arr,i,j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function bubbleSort(arr){
    let len = arr.length;
    for(let i=0;i<len;i++){
        for(let j=len-1;j>i;j--){
            if(arr[j-1]>arr[j]){
                exchange(arr,j-1,j);
            }
        }
    }
}
let arr = [2,1,3,6,9,0];
bubbleSort(arr);
console.log(arr);