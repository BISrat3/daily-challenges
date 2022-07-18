// Challenge 1

// Given an integer n, return a string array answer (1-indexed) where:

// answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
// answer[i] == "Fizz" if i is divisible by 3.
// answer[i] == "Buzz" if i is divisible by 5.
// answer[i] == i (as a string) if none of the above conditions are true.

// function Check(n){
// for (let i=0; i<=n; i++){
//     if (i % 3 === 0 &&  i% 5 === 0) {
//         console.log("FizzBuzz")
//     }
//     else if (i % 3 === 0) {
//         console.log("Fizz")
//     }
//     else if( i% 5 === 0) {
//         console.log("Buzz")

//     }
//     else {
//         console.log(i)
//     }
// }
// }

// Check(5)

// // console.log("hello")

// const nums =[3,2,4]
// const target = 6
// var twoSum = function(nums, target) {
//     for (let i=0; i< nums.length; i++){
//         for(let j = i+1;j< nums.length; j++ ){
//             if(nums[i] + nums [j] === target ){
//             console.log([i, j])
//              }
//         }
//     }
// };

// twoSum(nums, target)

// Suppose we want to write a function that calculates the sum of all numbers from 1 up to (and including) some number n
// function Sum(n){
//     let sum=0;
//     for (let i=1; i<=n;i++){
//         sum += i
//         console.log(sum)
//     }
//     return sum;
// }
// Sum(3)


function logAtLeast5 (n){
    for (let i=1; i<= Math.max(5, n);i++){
        console.log(i)
    }
}
logAtLeast5(3)