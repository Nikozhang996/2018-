// 给出两个数组 对数组内部元素一一配对，即折算出配对的元素乘积的和的最小值
let arr1 = [1,2,3]
let arr2 = [1,2,-3]


function mini(arr1, arr2) {
    arr1 = arr1.sort()
    arr2 = arr2.sort().reverse()

    let sum = 0;

    for (let index = 0; index < arr1.length; index++) {
        sum += arr1[index] * arr2[index]
    }

    return sum;
}


function mini2(arr1, arr2) {
    
}

console.log('结果：' + mini(arr1, arr2))