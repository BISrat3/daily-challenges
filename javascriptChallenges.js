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


//  O(n)

// function logAtLeast5 (n){
//     for (let i=1; i<= Math.max(5, n);i++){
//         console.log(i)
//     }
// }
// logAtLeast5(3)

// O(1)

// function logAtMost5 (n){
//     for (let i=1; i<= Math.min(5, n);i++){
//         console.log(i)
//     }
// }
// logAtMost5(3)

// double the array values

// function DoubleArray(array){
//     let newArray= [];
//     for (let i=0; i< array.length;i++){
//         newArray.push( 2 * array[i])
//     }
//     console.log(newArray)
//     return newArray;
// }

// DoubleArray([1,2,3])

// let instructor ={
//     firstName:'Solomon',
//     isInstructor:true,
//     favoriteNumbers:[1,2,3]
// }

// console.log(Object.entries(instructor))
// console.log(instructor.hasOwnProperty('lastName'))
// console.log(instructor.hasOwnProperty('firstName'))

function charCount(str){
    // make object to return at end
    let letter={};
    // loop over string, for each character
    for (let i=0; i<str.length; i++){
        let char= str[i].toLowerCase()
        // if the char is a number/ letter AND is a key object add one to count 
        if(letter[char]>0){
            // if the char is a number/ letter AND not in an object add it to object and set value to 1
            letter[char]++;
        }
        else{
            // if chracter is something else (space, period, etc) don't do anything
            letter[char]=1;
        }
    }
    // return object at end
    console.log(letter)
    return letter
}
charCount('hello')