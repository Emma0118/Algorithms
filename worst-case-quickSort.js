/**
 * Created by majie on 17-7-9.
 */
function quickSort(arr, left, right) {
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


}

const swap = {
    'r_m' : function () {
        
    }
}