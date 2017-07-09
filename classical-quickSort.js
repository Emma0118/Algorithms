/**
 * Created by majie on 17-7-9.
 */

//经典 快速排序 的 实现

const quickSort = arr => {
    if(arr.length <= 1) {
        return arr;
    }
    const pivotIndex = Math.floor(arr.length / 2); //重要！！   算法思路中第一步 基准为位置 理论上可以任选
    const pivot = arr.splice(pivotIndex, 1)[0];
    const left = [];
    const right = [];
    arr.forEach((item, idx) => {
        if(arr[idx] < pivot) {
            left.push(arr[idx])
        }else {
            right.push(arr[idx])
        }
    })
    return quickSort(left).concat([pivot], quickSort(right)); //连接 左数组、基准数和右数组
}

//  const getSort = quickSort([20,44,23,55,77,19]);
// console.log(getSort);

function testTime() {
    console.time('经典排序时间');
    quickSort([20,44,23,55,77,19]);
    console.timeEnd('经典排序时间');
}
testTime();