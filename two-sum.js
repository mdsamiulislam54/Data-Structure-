// Problem Statement

// Given an array of integers numbers and an integer target,
// return the indices of two numbers such that they add up to target.
// If there is no solution then return undefined

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Time Complexity => O(n)

//? Input
// [2, 11, 7, 15] and 9

//? Output
// [0, 2] (because 2 + 7 = 9)


const towSum = (arr, target) => {

    const sumMap = new Map();

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        const compliment = target - element;
 
        if (sumMap.has(compliment)) {
            return [sumMap.get(compliment), i]
        }

   
        sumMap.set(element, i);


    }

    return undefined
}

console.log(towSum([2, 11, 7, 15], 9))