/**
 * Created by linajiema on 2017/7/11.
 */
function insertionSort(arr) {
    for(let i = 1; i < arr.length; i++) {
        for(let j = 0; j < i; j++) {
            if(arr[j] > arr[i]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

const sortedArr = insertionSort([4,2,8,9, 4]);
console.log(sortedArr);