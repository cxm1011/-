function swap(arr,i,j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function quickSort(arr){
    if(arr.length === 0) return [];
    qSort(arr,0,arr.length-1);
    return arr;
}

function qSort(arr,low,high){
    if(low < high){
        let middle = getMid(arr,low,high);
        qSort(arr,low,middle-1);
        qSort(arr,middle+1,high);
    }
}

function getMid(arr,low,high){
    let midVal = arr[low];
    while(low < high){
        while(low < high && arr[high] > midVal){
            high --;
        }
        swap(arr,low,high);
        while(low < high && arr[low] < midVal){
            low ++;
        }
        swap(arr,low,high);
    }
    return low;
}
let arr = [2,3,1,5,8,10,0];
console.log(quickSort(arr));
    