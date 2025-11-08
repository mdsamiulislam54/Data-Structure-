
// * this a binary search algorithm
// this a same array const arr = ["A","B","C","D","E","F","G"] 
// target this "F" What is this element index number

const arr = [1, 3, 5, 7, 9, 11]

const binaryAlgorithm = (arr, target) => {
    let low = 0;
    let high = arr.length - 1;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let guess = arr[mid]

        if (guess === target) {
            return mid
        } else if (guess > target) {
            high = mid - 1
        } else {
            low = mid + 1
        }

    }

    return -1
}

console.log(binaryAlgorithm(arr, 1))