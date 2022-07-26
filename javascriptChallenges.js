// Challenge 1

const { merge } = require("jquery");
const { Query } = require("mongoose")

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

// function charCount(str){
//     // make object to return at end
//     let letter={};
//     // loop over string, for each character
//     for (let i=0; i<str.length; i++){
//         let char= str[i].toLowerCase()
//         // if the char is a number/ letter AND is a key object add one to count 
//         if(letter[char]>0){
//             // if the char is a number/ letter AND not in an object add it to object and set value to 1
//             letter[char]++;
//         }
//         else{
//             // if chracter is something else (space, period, etc) don't do anything
//             letter[char]=1;
//         }
//     }
//     // return object at end
//     console.log(letter)
//     return letter
// }
// charCount('hello')

// function charCount (str){
//     let obj={}
//     for (let i=0; i<str.length; i++){
//         let char = str[i].toLowerCase()
//         if(/[a-z0-9]/.test(char)){
//             if(obj[char]>0){
//                 obj[char]++
//             }
//             else {
//                 obj[char]=1;
//             }
//         }
//     }
//     console.log(obj)
//     return obj;
// }

// charCount('HEllo')


// or using for of
// function charCount (str){
//     let obj={}
//     for(let char of str){
//         char = char.toLowerCase()
//         if(/[a-z0-9]/.test(char)){
//             if(obj[char]>0){
//                 obj[char]++
//           without utilizing else stattement we can do obj[char] = ++obj[char]|| 1;
//             }
//             else {
//                 obj[char]=1;
//             }
//         }
//     }
//     console.log(obj)
//     return obj;
// }

// charCount('HEllo')


// function isAlphaNumeric(str){
//     let code;
//     for (let i=0, len= str.length; i< len; i++){
//         code= str.charCodeAt(i)
//         if(!(code>47&& code<58)&&!(code>64 && code< 91) && !(code>96 && code <123)){
//             return false
//         }
//      }
//      return true
//     }
//     isAlphaNumeric(text)

// // Q?
// // Write a function called same, which accepts two arrays. The function  should return true if every cvalue in the Array has it's corresponding value squared in the second array. The frequency of values must be the same. 

// // function same(arr1, arr2){ 
// // // array first equal to square of the second squared array return true
// // // else return false
// // if (arr1.length !== arr2.length){
// //     return false
// // }
// // for (let i=0; i< arr1.length; i++){
// //     let correctIndex = arr2.indexOf(arr1[i]**2)
// //     if(correctIndex=== -1){
// //         return false;
// //     }
// //     console.log(arr2)
// //     arr2.splice(correctIndex,1)
// // }
// // return true
// // }
// // same([1,3,2], [4,9,1])


// function same(arr1, arr2){ 
//     // array first equal to square of the second squared array return true
//     // else return false
//     if (arr1.length !== arr2.length){
//         return false
//     }
//     let frequencyCounter1= {}
//     let frequencyCounter2 = {}
//     for (let val of arr1){
//         frequencyCounter1[val] = (frequencyCounter1[val] || 0) +1 
//     }
//     for (let val of arr2){
//         frequencyCounter2[val] = (frequencyCounter2[val] || 0) +1 
//     }
//     console.log(frequencyCounter1)
//     console.log(frequencyCounter2)
//     for (let key in frequencyCounter1){
//         if (! (key ** 2 in frequencyCounter2)){
//             return false 
//         }
//         if (frequencyCounter2 [key ** 2] !== frequencyCounter1[key]){
//             return false
//         }
//     }
//     return true
// }
// same([1,3,5,2], [4,9,25,3])

// Q?
// Given two strings, write a function to determine if the second string is an anagram of the first, /
// An anagram is a word, phrase or name formed by rearranging the letters of another, such as cinema formed from iceman

// function anagram(first, second){
//     if(first.length !== second.length){
//         return false
//     }
//     const lookup ={}
//     for (let i=0; i<=first.length; i++){
//         let letter =first[i]
//         //  if letter exists, increment, otherwise set to 1
//         lookup[letter] ? lookup[letter] +=1 : lookup[letter] =1;
//     }
// //     console.log(lookup)
// //     for (let i=0; i<second.length;i++){
// //         let letter = second[i];
// //         //  can't find letter or letter is zero then it's not an anagram
// //         if(!lookup[letter]){
// //             return false 
// //         }
// //         else {
// //             lookup[letter] -=1
// //         }
// //     }
// //     return true
// // }
// // anagram('cat', 'act')

// // Q?
// // Write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair doesnot exist.
// // eg sumZero ([-3,-2,-1], 0,1,2,3)
// function sumZero(arr){
//     for(let i=0; i< arr.length;i++){
//         for(let j =i+1;j< arr.length;j++){
//             if(arr[i] + arr[j] === 0){
//                 console.log(arr[i,arr[j]])
//                 return (arr[i], arr[j])
//             }
//         }
//     }
// }

// sumZero([-2,-1,0,1,3])

// function sumZero(arr){
//     let left =0;
//     let right = arr.length-1;
//     while(left <right){
//         let sum = arr[left]+arr[right]
//         if (sum=== 0){
//             console.log(arr[left], arr[right])
//             return arr[left], arr[right]
//         }
//         else if(sum >0){
//             console.log(right--)
//             right--
//         }
//         else{
//             left++
//         }
//     }
// }

// sumZero([-4,-3,-2,-1,0,1,2,3])

// countUnique Values 
// implement a function called countUniqueValues which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted

// function countUniqueValue(arr){
//     let i =0;
//         for(let j=1; j<arr.length;j++){
//             if(arr[i]!==arr[j]){
//                 i++;
//                 arr[i] = arr[j]
//             }
//         }
//         console.log(i)
//         return i +1
// }
// countUniqueValue([1,1,1,1,2,1])

// Write a function called maxSubarraySum which accepts an array of integers and a numer called n. The function should calculate the maximum sum of n consecutive elements in the array. 

// function maxSubarraySum(arr, num){
//     if (num > arr.length){
//         return null
//     }
//     let max = -Infinity
//     for (let j = 0; j<arr.length - num +1; j++){
//         let temp=0;
//         for (let k= 0; k <num; k++){
//             temp += arr[j+k]
//         }
//         if (temp > max){
//             max = temp
//         }
//         console.log(max)
//     }
//     return max
// }

// maxSubarraySum([2,3,5,6], 2)

// // SlideWindow
// function maxSubarraySum(arr, num){
//     let maxSum = 0;
//     let tempSum =0;
//     if (arr.length < num)
//     return null;
//     for (let i=0; i<num; i++){
//         maxSum += arr[i]
//     }
//     tempSum =maxSum;
//     for (let i=num; i< arr.length; i++){
//         tempSum = tempSum - arr[i-num]+ arr[i];
//         maxSum = Math.max(maxSum, tempSum);
//     }
//     console.log(maxSum)
//     return maxSum
// }

// maxSubarraySum([3,2,1,5],2)

// Given a sorted array of integers, write a function called search, that accepts a value and returns the index where the value passed to the function is located. if the value is not found, return -1.

// Native solution
// function search(arr, value){
//     for ( let i=0; i< arr.length;i++){
//         if (arr[i] === value){
//             console.log(i)
//             return i
//         }
//     }
//     console.log(-1)
//     return -1;
// }

// linear search Time Complexity O(N)
// search([1,2,3,4],3)


// Binary Search

// function search(arr, value){
//     let min = 0;
//     let max = arr.length -1;

//     while(min <= max){
//         let middle =Math.floor(min + max)/2;
//         let currentElement = arr[middle];
//         if(arr[middle] < value){
//             min = middle +1;
//         }
//         else if (arr[middle]> value){
//             max = middle -1;
//         }
//         else{
//             console.log(middle)
//             return middle;
//         }
//     }
//     return -1;
// }
// // TIme comlexity - Log(N)- Binary Search
// search([1,2,3,4,5], 3)

// Recursion 
// function takeShower(){
//     return "Showering!"
// }

// function eatBreeakfast(){
//     let meal =cookFood()
//     return `Eating ${meal}`
// }

// function cookFood(){
//     let items = ["Oatmeal", "Eggs", "Protein Shake"]
//     return items[Math.floor(Math.random()* items.length)]
// }

// function wakeUp(){
//     takeShower()
//     eatBreeakfast()
//     console.log("Ok, ready to go to work")
// }

// wakeUp()

// // Base case
// function countDown(num){
//     if (num <=0){
//         console.log("All is done")
//         return
//     }
//     console.log(num) 
//     num--;
//     countDown(num)
// }

// countDown(5)

// second recursive base recursively 
// function sumRange(num){
//     if (num === 1)
//     return 1;
//     console.log( num + sumRange(num -1))
//     return num + sumRange(num -1)
// }

// sumRange(3)


// factorial check
// function factorial (num){
//     let total =1;
//     for (let i= num; i>0;i--){
//         total *=i
//     }
//     console.log(total)
//     return total
// }

// factorial(6)

// function factorial(num){
//     if (num === 1) return 1;
//     return num * factorial(num-1)
// }
// factorial(3)


// Helper method recursion 
// function collectOddValues(arr){
//     let result = [];
//     function helper(helperInput){
//         if (helperInput.length===0){
//             return;
//         }
//         if (helperInput[0]% 2 !==0){
//             result.push(helperInput[0])
//         }
//         helper(helperInput.slice(1))
//     }
//     helper(arr)
//     console.log(result)
//     return result;
// }

// collectOddValues([1,2,3,4,5,6,7,8,9])

// // pure recursion 
// function collectOddValues(arr){
//     let newArr = []
//     if (arr.length === 0){
//         return newArr
//     }
//     if(newArr[0] % 2 !== 0){
//      return newArr.push(arr[0])
//     }
//     newArr = newArr.concat(collectOddValues(arr.slice(1)))
//     return newArr
//     console.log(newArr)
// }

// collectOddValues([1,2,3,4,5])


// linear search 
// function checkArray(arr, val){

//     for(let i=0; i<arr.length;i++){
//         if (arr[i]=== val){
//             console.log(i)
//             return i
//         }
//     }
//         return -1;
    
// }
// checkArray([1,2,3,4], 3)

// binary search
// function binarySearch(arr, val){
//     let start =0;
//     let end = arr.length -1;
//     let middle= Math.floor((start + end)/2);
//     if (arr[middle] !== val && start <= end){
//         console.log(start, middle, end);
//         if(val< arr[middle]){
//             end = middle -1;
//         }
//         else{
//             start = middle +1;
//         }
//         middle = Math.floor((start+ end)/2)
//     }
//     console.log (start, middle, end);
//     console.log(middle)
//     return middle;
     
// }
// binarySearch([2,3,5,6,8,6], 8)


// loop over the longer string
// function naiveSearch (long, short){
//     let count =0; 
//     for( let i= 0; i<long.length; i++){
//         for (let j= 0; j<short.length;j++){
//             console.log(long[i] ,short[j])
//             if(short[j] !== long[i+j]){
//                 console.log("Break")
//                 break;
//             }
//             if (j === short.length -1){
//                 console.log('Found Me')
//                 count ++;
//             }
//         }
//     }
// }

// naiveSearch("lorie loled", "lol")

// comparator buit-in sorting 
// function numberCompare(num1, num2){
//     return num1 - num2
// }

// [7,9,3,5].sort(numberCompare)


// function compareByLength(str1, str2){
//     return str2.length -str1.length
// }

// ["Colt", "Sort", "Data Structures", "Algorithms"].sort(compareByLength)


// Bubble Sorting
// function bubbleSort(arr1){
// // looping variable
//     for (let i=0;i<arr1.length; i++){
//         for (let j=0;j<arr1.length;j++){
//             console.log(arr1, arr1[j], arr1[j+1]);
//             if(arr1[j] > arr1[j+1]){
//                 // swap
//                 let temp = arr1[j];
//                 arr1[j] =arr1[j+1];
//                 arr1[j+1] =temp
//             }
//         }
//     }
//     console.log(arr1)
//     return arr1;
// }

// bubbleSort([32,45,23,31,41])

// function bubbleSort(arr){
//     let noSwaps;
//     for (let i=arr.length; i>0; i--){
//         noSwaps = true;
//         for (let j=0; j< i-1;j++){
//             if(arr[j]> arr[j+1]){
//                 let temp = arr[j]
//                 arr[j]= arr[j+1] 
//                 arr[j+1] = temp
//                 noSwaps =false
//             }
//         } 
//         if(noSwaps)
//         break;
//     }
//     console.log(arr)
//     return arr
// }
// bubbleSort([7,1,2,3,4,5,6])

// time complexity of bubble sort is O(n)

// Selection Sort
//  function selectionSort(arr){
//     for (i =0 ; i< arr.length; i++){
//         let lowest =i;
//         for (let j=i+1; j<arr.length; j++){
//             if(arr[j]< arr[lowest]){
//                 lowest =j;
//             }
//         }
//         let temp= arr[i];
//         arr[i] =arr[lowest] 
//         arr[lowest]= temp
//     }
//     console.log(arr)
//     return arr;
//  }

//  selectionSort([5,4,2,1,3])

// // insertion Sort
// function insertionSort(arr){
//     for (let i=1; i< arr.length; i++){
//         let currVal = arr[i]
//         for (let j= i-1; j>=0 && arr[j] > currVal; j--){
//             arr[j+1] = arr[j]
//             // console.log(arr)
//         }
//         arr[j+1] = currVal
//         console.log(arr[j])
//         }
//         console.log(arr)
//         return arr;
// }

// insertionSort([2,1,9,76,3])

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

// function lengthOfLongestSubstring (s) {
//     let result =0;
//     let set = new Set()
//     let i = 0;
//     let j =0;
//     while(i<s.length && j < s.length){
//         if(!set.has(s[j])){
//             set.add(s[j])
//             j++;
//             if(j-i > result)
//             result = j-i;
//         }
//         else{
//             set.delete(s[i])
//             i++
//         }
//     }
//     return result
// };

// console.log(lengthOfLongestSubstring("abcabcbb"))


// function isPalindrom(num){
//     if(num % 10 == 0){
//         return num ==0
//     }
//     let res =0;
//     while( res < num){
//         res = res * 10 + num % 10
//         num /=10
//     }
//     console.log(res == num || res/10 == num)
//     return res == num || res/10 == num
// }
// isPalindrom(123)

// Q? You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.???
// function mergeTwoLists(list1, list2){
//     if (list1 === null){
//         return list2
//     }
//     if (list2 == null){
//         return list1
//     }
//     if( list1.val < list2.val){
//         list1.next = mergeTwoLists(list1.next, list2)
//         return list1
//     }
//     else{
//         list2.next = mergeTwoLists(list1, list2.next)
//         return list2
//     }
// }

// console.log(mergeTwoLists([], [0]))

// Merge sort
// function mergeSolution (arr1, arr2){
//     let results =[];
//     let i=0;
//     let j=0;
//     while(i<arr1.length && j< arr2.length){
//         if (arr2[j]> arr1[i]){
//             results.push(arr1[i])
//             i++
//         }
//         else{
//             results.push(arr2[j])
//             j++
//         }
//     }
//     while(i< arr1.length){
//         results.push(arr1[i])
//         i++
//     }
//     while(j< arr2.length){
//         results.push(arr2[j])
//         j++
//     }
//     console.log(results)
//     return results;

// }

// mergeSolution([1,10,50], [2,14,99,100])


// 
// function merge(arr1, arr2){
//     let results =[];
//     let i=0;
//     let j=0;
//     while(i<arr1.length && j< arr2.length){
//         if (arr2[j]> arr1[i]){
//             results.push(arr1[i])
//             i++
//         }
//         else{
//             results.push(arr2[j])
//             j++
//         }
//     }
//     while(i< arr1.length){
//         results.push(arr1[i])
//         i++
//     }
//     while(j< arr2.length){
//         results.push(arr2[j])
//         j++
//     }
//     console.log(results)
//     return results;

// }

// function mergeSort(arr){
//     if (arr.length <=1 )
//     return arr;
//     // mergeSort()
//     let mid = Math.floor (arr.length/2)
//     let left = mergeSort(arr.slice(0,mid))
//     let right= mergeSort(arr.slice(mid))
//     return merge(left, right)

// }

// mergeSort([10,24,76,73])

function pivot (arr, start=0, end=arr.length+1){
   function swap( array, i , j){
    let temp = array[i];
    array[i]= array[j];
    array[j] =temp;
   }
    let pivot = arr[start];
    let swapIdx = start;
    for (let i = start+1; i< arr.length;i++){
        if(pivot > arr[i]){
            swapIdx ++;  
            swap (arr, swapIdx, i)
        }
    }
    swap(arr, start, swapIdx)
    console.log( swapIdx)
    return swapIdx;
}

pivot ([9, 8, 2, 1, 5,7,6,3])