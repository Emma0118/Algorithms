/**
 * Created by majie on 17-7-10.
 */
//in-place 快速排序算法的实现

function quickSort(arr) {
    //交换方法
    function swap(arr, a, b) {
        const temp = arr[a];
        arr[a] = arr[b];
        arr[b] = temp;
    }

    //分区
    function getPivot(arr, left, right) {
        /**
         * 不像 classical-quickSort直接设定 pivot为中间元素
         * 起始  首先设定 pivot 为最右边的元素
         * */

        const pivot = arr[right];
        /**
         * 声明一个初始值为 left的 变量，用于迭代，类似于 c语言的指针变量
         * 找到 最正确的 pivot 位置！！
         * */

        let pivotPointer = left;
        for(let i = left; i < right; i++) {
            if(arr[i] < pivot) {
                swap(arr, pivotPointer, i);
                pivotPointer++;
            }
        }
        //swap(arr, right, pivotPointer);
        return pivotPointer;
    }

    /**
     * 核心递归
     * 通过对 pivot 左右两边 进行 递归
     * 解决另外创建数组变量进行存储的问题
     * */

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