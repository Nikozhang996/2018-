const arr1 = [1, 2, 3],
    arr2 = [1, 2, 3];

function fn(arr1, arr2) {
    let temp = [];
    arr1 = arr1.sort();
    arr2 = arr2.sort().reverse();
    for (let i = 0; i < arr1.length; i++) {
        temp.push(arr1[i] * arr2[i]);
    }
    return temp.reduce((prev, next) => prev + next);
}

console.log(fn(arr1, arr2));