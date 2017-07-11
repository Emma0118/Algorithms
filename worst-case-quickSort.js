/**
 * Created by majie on 17-7-9.
 */
function quickSort(arr) {
    function swap(arr, a, b) {
        const temp = arr[a];
        arr[a] = arr[b];
        arr[b] = temp;
    }


    function getPivot(arr, left, right) {
        let middle = 0;
        let leftElement = arr[left];
        let rightElement = arr[right - 1];
        let middleElement = arr[middle];
        if(rightElement < middleElement) {
            let tmp = rightElement;
            rightElement = middleElement;
            middleElement = tmp;
        }
        if(middleElement < leftElement) {
            let tmp = leftElement;
            leftElement = middleElement;
            middleElement = rightElement;
            rightElement = tmp;
        }else {
            if(rightElement > middleElement) {
                let tmp = middleElement;
                middleElement = rightElement;
                rightElement = tmp;
            }
        }

        //leftElement <= rightElement <= middleElement

        const pivot = middleElement;
        let pivotPointer = left;
        for(let i = left; i < right; i++) {
            if(arr[i] < pivot) {
                swap(arr, pivotPointer, i);
                pivotPointer++;
            }
        }
        return pivotPointer;
    }

    function sort(arr, left, right) {
        if(left > right || arr.length <= 1) {
            return;
        }
        const pivotPoiner = getPivot(arr, left, right);
        sort(arr, left, pivotPoiner - 1); // 左边进行排序
        sort(arr, pivotPoiner + 1, right); //右边进行排序
    }

    sort(arr, 0, arr.length - 1);
    return arr;
}

function testTime() {
    console.time('in-place排序时间');
    quickSort([20,44,23,55,77,19]);
    console.timeEnd('in-place排序时间');
}

// const getSort = quickSort([20,44,23,55,77,19]);
// console.log(getSort);

testTime();

