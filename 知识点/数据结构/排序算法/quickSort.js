
function exchange(arr,i,j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function quickSort(arr,left,right){
    if(left<right){
        var mid = findMid(arr,left,right);
        quickSort(arr,left,mid-1);
        quickSort(arr,mid+1,right);
    }
}

function findMid(arr,left,right){
    let midVal = arr[left];
    while(left<right){
        while(left<right && arr[right]>midVal){
            right--;
        }
        exchange(arr,left,right);
        while(left<right && arr[left]<midVal){
            left++
        }
        exchange(arr,left,right);
    }
    return left;
}

let arr = [2,1,3,6,9,0];
quickSort(arr,0,arr.length-1);
console.log(arr);
