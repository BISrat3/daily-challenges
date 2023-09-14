// Challenge 1

// const { trim } = require("jquery");

// const e = require("express");
// const { merge } = require("jquery");
// const { Query } = require("mongoose");

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
//   }
// }

// Check(15)

// // console.log("hello")

// const nums = [3, 2, 4];
// const target = 6;
// var twoSum = function (nums, target) {
//   for (let i = 0; i < nums.length; i++) {
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[i] + nums[j] === target) {
//         console.log([i, j]);
//       }
//     }
//   }
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
//       console.log(num)
//         return num ==0
//     }
//     let res =0;
//     while( res < num){
//         res = res * 10 + num % 10
//         console.log( res)
//         num /=10
//     }
//     console.log(res == num || res/10 == num)
//     return res == num || res/10 == num || res/11 ==num
// }
// isPalindrom(11)

// palindrome
// function isPalindrom(x){
//   if(x % 10){

//   }
// }
// isPalindrom()

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

// function pivot (arr, start=0, end=arr.length+1){
//    function swap( array, i , j){
//     let temp = array[i];
//     array[i]= array[j];
//     array[j] =temp;
//    }
//     let pivot = arr[start];
//     let swapIdx = start;
//     for (let i = start+1; i< arr.length;i++){
//         if(pivot > arr[i]){
//             swapIdx ++;
//             swap (arr, swapIdx, i)
//         }
//     }
//     swap(arr, start, swapIdx)
//     console.log(arr)
//     return swapIdx;
// }

// // pivot ([9, 8, 2, 1, 5,7,6,3])

// function quickSort(arr, left=0, right = arr.length-1){
//     if (left < right){
//         let pivotIndex = pivot( arr, left, right)
//          // left
//         quickSort (arr, left, pivotIndex-1);
//         // right
//         quickSort(arr, pivotIndex+1, right);
//     }
//     console.log(arr)
//     return arr
// }

// quickSort([4,6,9,1,2,5,7,3,8])

// function getDigit(num, i){
//     return Math.floor( Math.abs(num)/ Math.pow(10,i)) % 10
// }

// getDigit(7323,3)

// function digitCount(num){
//     if (num === 0)
//     return 1;
//     return Math.floor(Math.log10(Math.abs(num)))+1;
// }

// digitCount(21388)

// function mostDigits(nums){
//     let maxDigits =0;
//     for (let i=0; i< nums.length; i++){
//         maxDigits = Math.max(maxDigits, digitCount(nums[i]))
//     }
//     console.log(maxDigits)
//     return maxDigits
// }

// // mostDigits([123, 2323,3242,34341])

// function radixSort(nums){
//     let maxDigitCount=  mostDigits(nums);
//     for(let k=0; k< maxDigitCount;k++)
//         {
//     let digitBuckets = Array.from ({length:10}, ()=>[])
//     for (let i=0;i < nums.length;i++){
//         let digit =getDigit(nums[i], k)
//             digitBuckets[digit].push(nums[i])
//         }
//         // console.log(digitBuckets)
//         nums = [].concat(...digitBuckets)
//         // console.log(nums)
//     }
//     console.log(nums)
//     return nums
// }

// radixSort([23,345, 5467,12, 2345])

// class Student {
//     constructor (firstname, lastname, year, tardies){
//         this.firstname = firstname;
//         this.lastname  = lastname;
//         this.grade = year;
//         this.tardies = tardies;
//         this.scores = [];
//     }
//     fullName(){
//         return `Your full name is ${this.firstname} ${this.lastname}`
//     }
//     markLate(){
//         this.tardies +=1;
//         if (this.tardies >=3){
//             return "You are expelled!!!"
//         }
//         return `${this.firstname} ${this.lastname} has been  late ${this.tardies} times`
//     }
//     addScore(score){
//         this.scores.push(score);
//         return this.scores
//     }
//     calculateAverage(){
//         let sum = this.scores.reduce(function(a,b){return a+b});
//         return sum/this.scores.length
//     }
//     static enrollStudent(){
//         return "Enrolling Students"
//     }
// }

// let firstStudent = new Student ('Dan', "sol",2);
// let secondStudent = new Student ('Sam', "Teddy",4);

// // console.log(firstStudent.firstname)
// // console.log(secondStudent)

// console.log(Student.enrollStudent())

// class Point{
//     constructor(x, y){
//         this.x = x;
//         this.y = y;
//     }
//     static distance (a, b){
//         const dx = a.x - b.x;
//         const dy = a.y - b.y;
//         return Math.hypot(dx, dy);
//     }

// }

// const p1 = new Point(5,5);
// const p2 = new Point(10,10)

// console.log(Point.distance(p1,p2))

// Singly Linked list
// class Node{
//     constructor(val){
//         this.val = val;
//         this.null = null;
//     }
// }
// class SinglyLinkedList{
//     constructor(){
//         this.head = null;
//         this.tail= null;
//         this.length = 0;
//     }
//     push(val){
//         let newNode = new Node(val)
//         if(!this.head){
//             this.head = newNode;
//             this.tail = this.head;
//         }
//         else{
//             this.tail.next = newNode;
//             this.tail = newNode;
//         }
//         this.length++;
//         return this;
//     }
//     // traverse(){
//     //     let current = this.head;
//     //     while(current){
//     //         console.log(current.val);
//     //         current = current.next;
//     //     }
//     // }

//     // poping pseudocode
//     // if there are no nodes in the list, return undefined
//     // loop through the list until you reach the tail
//     // set the next property of the 2nd to last node to be null
//     // set the tail to be the 2nd to last node
//     // decrement the length of the list by 1
//     // return the value of the node removed

//     pop(){
//         if (! this.head || this.tail){
//             return undefined
//         }
//         let current = this.head;
//         let newTail = current;
//         while(current.next){
//             newTail = current;
//             current = current.next;
//         }
//         // console.log(current.val)
//         // console.log(newTail.val)
//         this.tail = newTail;
//         this.tail.next = null;
//         this.length --;
//         if(this.length === 0){
//             this.head = null;
//             this.tail = null;
//         }
//         return current;
//     }
// }

// let list = new SinglyLinkedList();
// list.push("Hello");
// list.push("there")
// list.push(20)
// list.traverse()
// console.log(list)
// console.log(list)
// let first = new Node("Hello")
// first.next = new Node("there")
// first.next.next = new Node("How's");
// first.next.next.next = new Node("it");
// first.next.next.next.next = new Node("going?")
// console.log(first)

// shifting linked list
// If there are no nodes, return undefined
// store the current head property in a variable
// Set the head property to be the current head's next property
// Decrement the length by 1
//  Return the value of the node removed

// class Node{
//     constructor(val){
//         this.val = val;
//         this.null = null;
//     }
// }
// class SinglyLinkedList{
//     constructor(){
//         this.head = null;
//         this.tail= null;
//         this.length = 0;
//     }
//     push(val){
//                 let newNode = new Node(val)
//                 if(!this.head){
//                     this.head = newNode;
//                     this.tail = this.head;
//                 }
//                 else{
//                     this.tail.next = newNode;
//                     this.tail = newNode;
//                 }
//                 this.length++;
//                 return this;
//             }
// shift(){
//     if(!this.head){
//         return undefined
//     }
//         let newCurrent = this.head;
//         this.head = newCurrent.next
//         // console.log(newCurrent.val)
//         // console.log(newCurrent.val)
//     this.length --;
//     // console.log(newCurrent)
//     return newCurrent;
// }
//     unShift(val){
//         let newNodeUnshift = new Node(val);
//         if(!this.head){
//         this.head = this.newNodeUnshift;
//         this.tail = this.head
//         }
//         else{
//             newNodeUnshift.next = this.head;
//             this.head = newNodeUnshift;
//         }
//         this.length ++;
//         return this;
//     }
// }

// let list = new SinglyLinkedList();
// list.push('no one');
// list.push('there');
// // list.shift()
// list.unShift("Hello")
// console.log(list)

// class Linked{
//     constructor() {
//         this.head = null;
//         this.tail = null;
//         this.length = 0;
//     }
// }

// get pseudocode
// this function should accept an index
// If the index is lessthan zero or greater than or equal to the length of the list, return null
// Loop through the list until you reach the index  and return the node ar that specific index

// class LinkedList{
//     constructor(val) {
//         this.val = val;
//         this.null = null;
//     }
// }

// class SinglyLinkedList{
//          constructor(){
//              this.head = null;
//              this.tail= null;
//              this.length = 0;
//          }
//     //      push(val){
//                  let newNode = new LinkedList(val)
//                  if(!this.head){
//                  this.head = newNode;
//                      this.tail = this.head;
//                  }
//                  else{
//                      this.tail.next = newNode;
//                      this.tail = newNode;
//                  }
//                  this.length++;
//             return this;
//   }
// get (index){
//     if(index < 0 || index >= this.length)
//     return null;
//     let counter =0;
//     let current = this.head;
//     while(counter !== index){
//         current = current.next;
//         counter++
//     }
//     // console.log(current)
//     return current;
// }

// use your get function to find the specific node
//  if the node is not found return false
// if node is found, set the value of that node to be the value passed to the function and return true;

// set (index, val){
//     let foundNode = this.get(index);
//     if(foundNode){
//         foundNode.val = val;
//         return true;
//     }
//     return false;

// }

// insert pseudocode
// If the index is the same as the length, push at the end of the list
// If the index is 0, unshift a new node to the start of the list
// ohterwise, uisng the get method, access the node at the index -1
// Set the next property on that node to be the new node
// Set the next property on the new node to be the previous next
//  increment the length
//     // return true
//     insert(index, val){
//         if(index<0 || index > this.length) return false;
//         if(index === this.length) return this.push(val);
//         if(index === 0) return this.unshift(val)
//         let newNode = new LinkedList(val);
//         let prev = this.get(index-1);
//         let temp = prev.next;
//         prev.next = newNode;
//         newNode.next = temp;
//         this.length++;
//         return true;
//     }
//     pop(){
//                 if (! this.head || this.tail){
//                     return undefined
//                 }
//                 let current = this.head;
//                 let newTail = current;
//                 while(current.next){
//                     newTail = current;
//                     current = current.next;
//                 }
//                 // console.log(current.val)
//                 // console.log(newTail.val)
//                 this.tail = newTail;
//                 this.tail.next = null;
//                 this.length --;
//                 if(this.length === 0){
//                     this.head = null;
//                     this.tail = null;
//                 }
//                 return current;
//             }
//     // Remove pseudocode
//     //  if the index is less than zero or greater than the length, return undefined
//     // if the index is the same as the length -1, pop
//     // if the index is 0, shift
//     // Otherwise, using the get method, access the node at the index-1
//     // Set the next property on that node to be the next of the next node
//     // Decrement the length
//     // Return the value of the node removed
//     remove (index){
//         if(index<0 || index >= this.length) return undefined;
//         if(index === 0) return this.shift();
//         if(index === this.length-1) return this.pop();
//         let perviousNode = this.get(index -1);
//         let removed = perviousNode.next;
//         perviousNode.next = removed.next;
//         this.length--;
//         return removed;
//     }

//     // reverse pseudocode
//     //

//     reverse(){
//         let node = this.head;
//         this.head = this.tail;
//         this.tail = node;
//         let next;
//         let prev = null;
//         for ( let i=0; i<this.length;i++){
//             next = node.next;
//             node.next = prev;
//             prev = node;
//             node = next;
//         }
//         console.log(this)
//         return this;
//     }
//     print (){
//         let arr = [];
//         let current = this.head;
//         while (current){
//             arr.push(current.val)
//             current = current.next;
//         }
//         console.log(arr)
//     }
// }

// let list = new SinglyLinkedList();

// list.push (2);
// list.push(3);
// list.push(4);
// list.push(7)
// list.push(8)

// // console.log(list.remove(4))
// // console.log(list)

// console.log(list.print())
// console.log(list.reverse())

// Node
// - val  and -next and -prev
// Doubly linkedlist
// - head , - tail, and -length

// class Node{
//     constructor(val){
//         this.val = val;
//         this.next = null;
//         this.prev= null
//     }
// }

// class DoublyLinkedList {
//     constructor() {
//         this.head = null;
//         this.tail = null;
//         this.length = 0;
//     }
//     // push pseudocode
//     // create a new node with the value passed to the function
//     // if the head property is null set the head and the tail to be the newly created node
//     // if not,set the next property on the tail to be that node
//     // set the previous property on the newly created node to be the tail
//     // Set the tail to be the newly created node
//     // increament the length
//     // Return the Doubly Linked List

//     push(val){
//         let newNode = new Node(val)
//         if(this.length === 0){
//             this.head = newNode;
//             this.tail = newNode;
//         }
//         else {
//             this.tail.next = newNode;
//             newNode.prev = this.tail;
//             this.tail = newNode
//         }
//         this.length++;
//         return this;
//     }

//     // psuedocode
//     // if there is no head, return undefined
//     // store the current tail in a variable to return later
//     // if the length is 1, set the head and tail to be null
//     // update the tail to be the previous node
//     // set the new tail's next to null
//     // decrement the length
//     // return the value removed

//     pop(){
//         if (!this.head){
//             return undefined;
//         }
//         let currentTail = this.tail;
//         if (this.length === 1){
//             this.head = null
//             this.tail = null;
//         }
//         else{
//             this.tail = currentTail.prev
//             this.tail.next = null
//             currentTail.prev =null

//         }
//         this.length--;
//         return this.currentTail
//     }

//     // if length is 0, return undefined
//     // Store the current head property in a variable (we'll call it old head)
//     // if the length is one - set the head to be a null - set the tail to be null
//     // update the head to be the next of the old head
//     // Set the head's prev property to null
//     // Set the old head's next to null
//     // Decrement the length
//     // Return old head
//     shift(){
//         if(this.length === 0)
//         return undefined;
//         let oldHead= this.head
//         if (this.length === 1)
//         {
//             this.head = null;
//             this.tail = null;
//         } else{
//             this.head = oldHead.next;
//             this.head.prev = null;
//             oldHead.next = null
//         }
//         this.length--;
//         return oldHead;
//     }
//     // unshift pseudocode
//     // create a new node with the value passed to the function
//     // if the length is 0 - Set the head to be the new node - Set the tail to be the new node
//     // otherwise - set the prev property on the head of the list to be the new node
//     // Set the next property on the new node to be the head property
//     // Update the head to be the new node
//     // Increment the length
//     // Return the list
//     unShift(val){
//         let newNode = new Node(val)
//         if (this.length === 0){
//             this.head = newNode
//             this.tail = newNode
//         }
//         else{
//             this.head.prev =newNode
//             newNode.next= this.head
//             this.head = newNode
//         }
//         this.length++
//         return this
//     }
//     // Get Pseudocode
//     // If the index is less than 0 or greater or equal to the length, return null
//     // If the index is less than or equal to half the length of the list - Loop through the list starting from the head and the loop towards the middle  - Return the node once it is found
//     // IF the index  is greater than half the length of the list - Loop through the list starting from the tail and loop towards the middle
//     // Return the node once it is found
//     get (index){
//         if(index < 0 || index>= this.length){
//             return null;
//         }
//         let current = this.head;
//         if (index <= this.length/2){
//             let count = 0;
//             console.log('Working from the beginning')
//             while (count != index){
//                 current = current.next;
//                 count++;
//             }
//             return current
//         }else{
//             let count = this.length -1;
//             let current = this.tail;
//             console.log('Working from the end')
//             while (count != index){
//                 current = current.prev;
//                 count--;
//             }
//         }

//         return current;
//     }
//     set(index, val){
//         let setResult = this.get(index);
//         if(setResult){
//            setResult.val = val;
//             return true;
//         }
//         return false;
//     }

//     // Insert Pseudocode
//     // if the index is less than zero or greater than or equal to the length return false
//     // if the index is 0, unshift
//     // if the index is the same as the length, push
//     // Use the get method to access the index-1
//     // Set the next and prev properties on the correct nodes to link everything together
//     // incerement the length
//     //  Return True
//     insert(index, val){
//         if(index < 0 ||index>=this.length){
//             return false;
//         }
//         if (index === 0){
//             return this.unShift(val)
//         }
//         if (index === this.length){
//             return this.push(val)
//         }
//         let newNode = new Node(val);
//         let beforeNode= this.get(index-1);
//         let afterNode = beforeNode.next;
//         beforeNode.next = newNode;
//         newNode.prev = beforeNode;
//         newNode.next = afterNode;
//         afterNode.prev= newNode;
//         this.length++;
//         return true;
//     }
//     // Remove pseudocode
//     // if the index is less than zero or greater than or equal to the length return undefined
//     // if the index is 0, shift
//     // if the index is the same as the lenght-1, pop
//     // use the get method to retrieve the item to be removed
//     // update the next and prev properties to remove the found node from the list
//     // Set next and prev to null on the found node
//     // Decrement the length
//     // Return the remove node
//     remove(index){
//         if (index < 0|| index >= this.length){
//             return undefined;
//         }
//         if (index === 0){
//             return this.shift()
//         }
//         if(index === this.length-1){
//             return this.pop()
//         }
//         let removeNode = this.get(index)
//         removeNode.prev.next = removeNode.next;
//         removeNode.nex.prev = removeNode.prev;
//         removeNode.next = null;
//         removeNode.prev = null;
//         this.length--;
//         return removeNode;
//     }
// }

// let list = new DoublyLinkedList()

// list.push(12)
// list.push(13)
// list.push(14)
// list.push(15)
// list.push("Same")
// // list.pop(15)

// // list.shift(12)
// // list.unShift(11)
// // list.get(14)
// // console.log(list.set(4, 34))
// // console.log(list.insert(0, 18))
// console.log(list.remove(3))
// console.log(list)

// stack
// recursion_factorial
// function factorial (x){
//     if (x===0)
//     return 1;
//     console.log(x)
//     return x * factorial(x-1);
// }
// // LIFO last in first thing removed
// factorial(3)

// pushing pseudocode
// the function should accept value
// create a new node with that value
// if there are no nodes in the stack, set the first and last property to be the newly created node
// if there is atleast one node, create a variable that stores the current first property on the stack
// Reset the first property to be the newly created node
// Set the next property no the node to be the previously created variable
// Increment the size of the stack by 1
// class Node{
//     constructor (value){
//         this.value = value;
//         this.next = null
//     }
// }
// class Stack {
//     constructor(){
//         this.first = null;
//         this.last =  null;
//         this.size = 0;
//     }
//     push(val){
//         let newNode = new Node(val)
//         if(!this.first)
//         {
//             this.first = newNode;
//             this.last = newNode;
//         } else{
//             let temp = this.first;
//             this.first = newNode;
//             this.first.next = temp;
//         }
//         console.log(this.size)
//         return ++this.size;
//     }
//     pop(){
//         if(!this.first )
//         return null;
//         let temp = this.first;
//         if(this.first === this.last){
//             this.last = null;
//         }
//         this.first = this.first.next;
//         this.size--;
//         console.log(temp.value)
//         return temp.value;
//     }
// }

// let list= new Stack()

// list.push(2)
// list.push(3)
// list.pop(2)

// class Node{
//     constructor(value){
//         this.value = value;
//         this.next = null;
//     }
// }
// class Queue{
//     constructor(){
//         this.first = null;
//         this.last = null;
//         this.size = 0;
//     }
//     // enqueue pseudocode
//     // this function accepts some value
//     // create a new node using that value passed to the function
//     // If there are no nodes in the queue, set this node to be the first and last property of the queue
//     // Otherwise,se tthe next property on the current last to be that node, and then set the last property of the queue to be that node
//     enqueue(val){
//         let newNode = new Node(val)
//         if(!this.first){
//             this.first = newNode
//             this.last = newNode
//         }
//         else{
//             this.last.next = newNode;
//             this.last = newNode
//         }
//         return ++this.size;
//     }
//     // dequeue
//     // this function accepts some value
//     // create a new node using that value passed to the function
//     // If there are no nodes in the queue, set this node to be the first and last property of the queue
//     // Otherwise,se tthe next property on the current last to be that node, and then set the last property of the queue to be that node

//     dequeue(){
//          if(!this.first) return null;
//          let temp = this.first;
//          if(this.first === this.last){
//             this.last = null;
//          }
//          this.first = this.first.next;
//          this.size--;
//          return temp.value;
//     }
// }

// let q =new Queue()
// q.enqueue("hello")
// q.dequeue()
// console.log(q)

// Binary Search Tree Class
// class Node {
//     constructor(value){
//         this.value = value;
//         this.left = null;
//         this.right = null;
//     }
// }

// class BinarySearchTree{
//     constructor(){
//         this.root = null;
//     }
// create new node
// starting at the root
// check if there is a root. if not- the root now becomes that new node
// if there is a root, check if the vlaue of the new node is greater than or less than the value of the root
// if it is greater
// check to see if there is a node to the right
// - if there is move to that node and repeat these steps
// - if there is not, add that node as the right property
// if it is lees-  check to see if there is a node to the left
// - if there is, move to that node and repeat these steps
// - if there is not, add that node as the left property
//     insert(value){
//         let newNode = new Node(value);
//         if(this.root === null){
//             this.root = newNode;
//             return this;
//         }
//         else {
//             let current = this.root;
//             while(true){
//                 if (value === current.value) return undefined;
//                 if (value < current.value){
//                     if (current.left === null){
//                         current.left = newNode;
//                         return this;
//                     }
//                     else{
//                         current = current.left;
//                     }
//                 }
//                 else if(value > current.value){
//                     if (current.right === null){
//                         current.right = newNode;
//                         return this;
//                     }
//                     else{
//                         current = current.right
//                     }
//                 }
//             }
//         }
//     }
// //     find(value){
//         if(this.root === null) return false;
//         let  current = this.root, found = false;
//         while(current  && !found){
//             if(value < current.value){
//                 current = current.left;
//             }
//             else if (value > current.value){
//                 current = current.right;
//             }
//             else{
//                 found = true;
//             }
//         }
//         if(!found) return undefined;
//         return current;
//     }
// }

// let tree = new BinarySearchTree()
// // tree.root = new Node(10);
// // tree.root.right = new Node(15);
// // tree.root.left = new Node(8);
// // tree.root.left.right = new Node(9)

// tree.insert(10)
// tree.insert(5)
// tree.insert(13)
// tree.insert(11)
// tree.insert(2)
// tree.insert(16)
// tree.insert(7)
// console.log(tree.find(20))
// console.log(tree)

// BFS Pseudocode
// create a queue (this can be an array) and a variable to store the values of nodes visited
// Place the root node in the queue
// Loop as long as there is anything in the queue
// - Dequeue a node from the queue and oush the value of the node into the variable that stores the nodes
// If there is a left property on the node dequeued - add it to the queue
// If there is a right property on the node dequeued -add it to the queue
// Return the varuable that stores the values
// class Node{
//     constructor(value){
//         this.value = value;
//         this.left = null;
//         this.right = null;
//     }
// }
// class BreadthFirstSearch{
//     constructor(){
//         this.root = null;
//     }
//     insert(value){
//                 let newNode = new Node(value);
//                 if(this.root === null){
//                     this.root = newNode;
//                     return this;
//                 }
//                 else {
//                     let current = this.root;
//                     while(true){
//                         if (value === current.value) return undefined;
//                         if (value < current.value){
//                             if (current.left === null){
//                                 current.left = newNode;
//                                 return this;
//                             }
//                             else{
//                                 current = current.left;
//                             }
//                         }
//                         else if(value > current.value){
//                             if (current.right === null){
//                                 current.right = newNode;
//                                 return this;
//                             }
//                             else{
//                                 current = current.right
//                             }
//                         }
//                     }
//                 }
//             }
//     BFS(){
//         let node = this.root,
//             data = [],
//             queue = [];
//         queue.push(node);
//         while (queue.length){
//             node = queue.shift();
//             data.push(node.value);
//             if (node.left) queue.push(node.left);
//             if (node.right) queue.push(node.right);
//         }
//         return data;
//     }
//     // DFS preorder
//     // create a varaible to store the values of nodes visited
//     // Store the root of the BEST in a variable called current
//     // Write a helper function which accepts a node
//     // - Push the value of the node to the variable that stores the values
//     // - IF the node has a left property,call the helper function with the left property on the node
//     // -If the node has a right property, call the helper function with the right property on the node
//     // invoke the helper function with the current variable
//     // Return the array of values

//     DFSPreOrder(){
//         let data = []
//         let current = this.root;
//         function traverse(node){
//             data.push(node.value)
//             if(node.left){
//                 traverse(node.left)
//             }
//             if(node.right){
//                 traverse(node.right)
//             }
//         }
//         traverse(current)
//         return data;
//     }
//     // DFS PostOrder
//     // create a varaible to store the values of nodes visited
//     // Store the root of the BST in a variable called current
//     // Write a helper function which accepts a node

//     // - IF the node has a left property,call the helper function with the left property on the node
//     // -If the node has a right property, call the helper function with the right property on the node
//     // - Push the value of the node to the variable that stores the values
//     // invoke the helper function with the current variable
//     // Return the array of values
//     DFSPostOrder(){
//         let data =[];
//         let current = this.root;
//         function traverse(node){
//             if(node.left)
//             traverse(node.left)
//             if(node.right)
//             traverse(node.right)
//             data.push(node.value)
//         }
//         traverse(current)
//         return data;
//     }
//     // DFS InOrder
//     // create a varaible to store the values of nodes visited
//     // Store the root of the BST in a variable called current
//     // Write a helper function which accepts a node

//     // - IF the node has a left property,call the helper function with the left property on the node
//     // - Push the value of the node to the variable that stores the values
//     // -If the node has a right property, call the helper function with the right property on the node
//     // invoke the helper function with the current variable
//     // Return the array of values
//     DFSInOrder(){
//         let data =[];
//         let current = this.root;
//         function traverse(node){
//             if(node.left)
//             traverse(node.left)
//             data.push(node.value)
//             if(node.right)
//             traverse(node.right)
//         }
//         traverse(current)
//         return data;
//     }
// }

// let tree = new BreadthFirstSearch();
// tree.insert(10);
// tree.insert(6);
// tree.insert(15);
// tree.insert(3);
// tree.insert(8);
// tree.insert(20);
// console.log(tree.DFSPreOrder())
// // console.log(tree.BFS())
// console.log(tree.DFSPostOrder())
// console.log(tree.DFSInOrder())

// Insert Pseudocode
// Push the value into the values property on the heap
//  Bubble up: - Create a variable called index which is the length of the values property-1
// - Create a variable called parentIndex which is the floor of(index-1)/2
// - Keep looping as long as the values element at the parentIndex is less than the values element at the child index
// - Swap the vlaue of the values element at the parentIndex with the value of the element proprty at the child index
// - Set the index to be the parentIndex, and start over!

// class MaxBinaryHeap{
//     constructor(){
//         this.values= [41,39,33,18,27,12];
//     }
//     insert(element){
//         this.values.push(element);
//         this.bubbleUp();
//     }
//     bubbleUp(){
//         let index = this.values.length-1;
//         const element = this.values[index]
//         while(index>0){
//             let parentIndex = Math.floor((index-1)/2)
//             console.log(parentIndex)
//             let parent = this.values[parentIndex];
//             // if(element > parent){
//             //     this.values[parentIndex]= element;
//             //     this.values[index] = parent;
//             //     index = parentIndex;}
//             if(element <= parent) break
//                 this.values[parentIndex]= element;
//                 this.values[index] = parent;
//                 index = parentIndex;
//         }
//     }
//     // / Remove Pseudocode(also called extractMax)
//     // Swap the first value in the values property with the last one
// // Pop from the values property, so you can return the value at the end
// // Have the new root "Sink down" to the correct spot
// // - Your parent index starts at 0(the root)
// //  Find the index of the left child:2 * index+1 (make sure its not out of bounds)
// // - Find the index of the right child: 2 * index +2 (make sure its not out of bounds)
// // - IF the left or right child is greater than the element -- swap. if both left and right children are larger, swao with the largest child
// // The child index you swapped to now becomes the new parent index.
// // Keep looping and wapping until neither child is larger than the element.
// //  Return the old root.
//     extractMax(){
//         // Edge case come back to this
//         const max = this.values[0];
//         const end = this.values.pop();
//         if(this.values.length >0){
//             this.values[0] = end;
//             // trickle down
//             this.sinkDown();
//         }
//         return max;
//     }
//     sinkDown(){
//         let idx = 0;
//         const length = this.values.length;
//         const element = this.values[0];
//         while(true){
//             let leftChildIdx = 2 * idx +1;
//             let rightChildIdx = 2 * idx +2;
//             let leftChild, rightChild;
//             let swap = null;
//             if(leftChildIdx < length){
//                 leftChild = this.values[leftChildIdx]
//                 if(leftChild> element){
//                     swap = leftChildIdx;
//                 }
//             }
//             if(rightChildIdx < length){
//                 rightChild = this.values[rightChildIdx]
//                 if((swap === null && rightChild>  element)||
//                 (swap !== null && rightChild>  leftChild)){
//                     swap = rightChildIdx;
//                 }
//             }
//             if (swap === null) break;
//             this.values[idx] = this.values[swap]
//             this.values[swap] = element;
//             idx = swap;
//         }
//     }

// }
// let heap = new MaxBinaryHeap();
// heap.insert(55)
// heap.insert(44)
// heap.insert(47)
// // console.log(heap)
// console.log(heap.values)

// Priority Queue
// Write a min binary heap - lower number means highr priority
// Each Node has a val and a priority. Use the priority to build the heap.
// Enqueue method accepts a value and priority, makes  a new node and puts it in the right spot based off of its priority
// Dequeue method removes root element, returns it, and rearranges heap using priority

// class PriorityQueue{
//     constructor(){
//         this.values =[]
//     }
//     enqueue(val, priority){
//         let newNode = new Node(val, priority)
//                 this.values.push(newNode);
//                 this.bubbleUp();
//             }
//             bubbleUp(){
//                 let index = this.values.length-1;
//                 const element = this.values[index]
//                 while(index>0){
//                     let parentIndex = Math.floor((index-1)/2)
//                     console.log(parentIndex)
//                     let parent = this.values[parentIndex];
//                     // if(element > parent){
//                     //     this.values[parentIndex]= element;
//                     //     this.values[index] = parent;
//                     //     index = parentIndex;}
//                     if(element.priority >= parent.priority) break
//                         this.values[parentIndex]= element;
//                         this.values[index] = parent;
//                         index = parentIndex;
//                 }
//             }
//             dequeue(){
//                         // Edge case come back to this
//                         const min = this.values[0];
//                         const end = this.values.pop();
//                         if(this.values.length >0){
//                             this.values[0] = end;
//                             // trickle down
//                             this.sinkDown();
//                         }
//                         return min;
//                     }
//                     sinkDown(){
//                         let idx = 0;
//                         const length = this.values.length;
//                         const element = this.values[0];
//                         while(true){
//                             let leftChildIdx = 2 * idx +1;
//                             let rightChildIdx = 2 * idx +2;
//                             let leftChild, rightChild;
//                             let swap = null;
//                             if(leftChildIdx < length){
//                                 leftChild = this.values[leftChildIdx]
//                                 if(leftChild.priority< element.priority){
//                                     swap = leftChildIdx;
//                                 }
//                             }
//                             if(rightChildIdx < length){
//                                 rightChild = this.values[rightChildIdx]
//                                 if((swap === null && rightChild.priority<  element.priority)||
//                                 (swap !== null && rightChild.priority<  leftChild.priority)){
//                                     swap = rightChildIdx;
//                                 }
//                             }
//                             if (swap === null) break;
//                             this.values[idx] = this.values[swap]
//                             this.values[swap] = element;
//                             idx = swap;
//                         }
//                     }

// }

// class Node{
//     constructor(val, priority){
//         this.val = val;
//         this.priority = priority
//     }
// }

// let ER = new PriorityQueue();
// ER.enqueue("common cold", 5)
// ER.enqueue("gubshot wound", 1)
// ER.enqueue("high fever",4)
// ER.enqueue("hglass in foot",3)
// ER.enqueue("broken arm",2)

// console.log(ER)
// console.log(ER.dequeue(2))

// function hash(key, arrayLen){
//     let total = 0;
//     for(let char of key){
//         // map "a" to 1, "b" to 2, "c" to 3
//         let value = char.charCodeAt(0) - 96
//         total = (total + value) % arrayLen;
//     }
//     console.log(total)
//     return total;
// }
// hash("pink", 10)
// hash("orangered", 10)
// hash("cyan", 3)

// function hash(key, arrayLen){
//     let total = 0;
//     let WEIRD_PRIME = 31;
//     for (let i=0; i<Math.min(key.length, 100); i++){
//         let char = key[i];
//         let value = char.charCodeAt(0)-96;
//         total = (total * WEIRD_PRIME + value)% arrayLen
//     }
//     console.log(total)
//     return total;
// }
// hash("pink", 10)
// hash("orangered", 10)
// hash("cyan", 3)

// Set
//  1. Accepts a key  and a value
// 2. Hashes the key
// 3. Stores the key-value pair in the hash table array via separate chaining

// Get
//  1. Accepts a key
// 2. Hashes the key
// 3. Retrieves the key-value pair in the hash table
// 4. If the key isn't found, returns undefined

// class HashTable{
//     constructor(size =53){
//         this.keyMap = new Array(size);
//     }
//     _hash(key){
//         let total = 0;
//     let WEIRD_PRIME = 31;
//     for (let i=0; i<Math.min(key.length, 100); i++){
//         let char = key[i];
//         let value = char.charCodeAt(0)-96;
//         total = (total * WEIRD_PRIME + value)% this.keyMap.length;
//     }
//     // console.log(total)
//     return total;
//     }
//     set (key, value){
//         let index = this._hash(key);
//         if(!this.keyMap[index]){
//             this.keyMap[index]=[];
//         }
//         this.keyMap[index].push([key, value])
//         // return index;
//     }
//     get(key){
//         let index = this._hash(key);
//         if(this.keyMap[index]){
//             // return this.keyMap([index])
//             for( let i= 0; i<this.keyMap[index].length;i++){
//                 if(this.keyMap[index][i][0]===key){
//                     return this.keyMap[index][i]
//                 }
//             }
//         }
//         return undefined
//     }
//     values(){
//         let valuesArr = [];
//         for(let i=0; i<this.keyMap.length;i++){
//             if(this.keyMap[i]){
//                 for(let j=0; j<this.keyMap[i].length;j++){
//                     if(!valuesArr.includes(this.keyMap[i][j][1])){
//                     valuesArr.push(this.keyMap[i][j][1])
//                     }
//                 }
//             }
//         }
//         return valuesArr;
//     }
// }
// let ht= new HashTable();
// ht.set("Hello world", "goodbye!")
// ht.set("French", "fries")
// ht.set("hey", "everyone")
// ht.set("salmon", "#FA8072")
// ht.set("Yellow", "##FFFF00")
// ht.set("Violet", "##FFFF00")
// // console.log(ht)
// ht.set("ARE WE DONE", "YES")

// console.log(ht.get("Yellow"))
// console.log(ht.values())
// console.log(ht.get("ARE WE DONE"))

// Graph adding a vertex
// Write a method called addVertex, which accepts a name of a vertex
// It should add a key to the adjacency list with the name of the vertex and set its value to be an empty array.

// class Graph{
//     constructor(){
//         this.adjacencyList = {};
//     }
//     addVertex(vertex){
//         if(!this.adjacencyList[vertex])
//         this.adjacencyList[vertex] =[];
//     }
//     // Adding an Edge
//     // - This function should accept two vertices, we can call them vertex1 and vertex2
//     // The function should find in the adjacency list the key of vertex 1 and push vertex2 to the array
//     // The function should find in the adjacency list the key of vertex2 and push vertex1 to the array
//     // Don't worry about handling errors/invalid vertices
//     addEdge(v1,v2){
//          this.adjacencyList[v1].push(v2);
//          this.adjacencyList[v2].push(v1);
//     }
//     removeEdge(v1,v2){
//         this.adjacencyList[v1] = this.adjacencyList[v1].filter( v=> v!==v2)
//         this.adjacencyList[v2] = this.adjacencyList[v2].filter( v=> v!==v1)
//    }
//    removing a vertex
// the function should accept a vertex to remove
// the function should loop as long as there are any other vertices in the adjacency list for that vertex
// inside of the loop, call our removeEdge function with the vertex we are removing and any values in the adjacency list for that vertex
// delete the key in the adjacency list for that vertex
//    removeVertex(vertex){
//         while(this.adjacencyList[vertex].length){
//             const adjacentVertex = this.adjacencyList[vertex].pop();
//             this.removeEdge(vertex, adjacentVertex)
//         }
//         delete this.adjacencyList[vertex]
//    }
// Depth first traversal- recursive
// The function should accept a starting node
// Create a list to store the end result, to be returned at the very end
// Create an object to store visited vertices
// Create a helper function which accepts a vertex
// - The helper function should return early if the vertex is empty
// - The helper function should place the vertex it accepts into the visited object and push that vertex into the result array
// - Loop over all of the values in the adjacencyList for that vertex
// - If any of those values have not been visited, recursivley invoke the helper function with that vertex.
// Invoke the helper function with the starting vertex
// Return the result array
//    depthFirstRecursive(start){
//         const result = [];
//         const visited = {};
//         const adjacencyList = this.adjacencyList;

//         (function dfs(vertex){
//             if(!vertex) return null;
//             visited[vertex] = true;
//             result.push(vertex);
//             adjacencyList[vertex].forEach(neighbor => {
//                 if(!visited[neighbor]){
//                     return dfs(neighbor)
//                 }
//             })
//         })(start)
//         // console.log(result)
//         return result;
//    }
//    Depth first traversal - Iterative
// The function should accept a starting node
// Create a stack to help use keep track of vertices (use a list/array)
// Create a list to store the end result, to be returned at the very end
// Create an object to store vistited vertices
// Add the starting vertex to the stack, and mark it visited
// While the stack has something in it:
// - Pop the next from the stack
// - If that vertex hasn't been visited yet: - Mark it as visited
// ---- Add it to the result list
// --- Push all of its neighbors into the stack.
//  Return the result array
//    depthFirstIterative(start){
//         const stack = [start]
//         const result =[];
//         const visited = {};
//         visited[start] =true;
//         let currentVertex;
//         while(stack.length){
//             console.log(stack)
//             currentVertex = stack.pop();
//             result.push(currentVertex);
//             this.adjacencyList[currentVertex].forEach(neighbor => {
//                 if(!visited[neighbor]){
//                     visited[neighbor] = true;
//                     stack.push(neighbor)
//                 }
//             })
//         }
//         return result;
//    }
//    Breadth first
// - This function should accept a starting vertex
// - Create a queue (you can use an array) and place the starting vertex in it.
// - Create an array to store the nodes visited
// - Create an object to store nodes visited
// - Mark the starting vertex as visited
// - Loop as long as there is anything in the queue
// - Remove the first vertex from the queue and push it into the array that stores nodes visited
// - Loop over each vertex in the adjacency list for the vertex you are visiting.
// - if it is not inside the object that stores nodes visited, mark it as visted and enqueue that vertex
// return the array of vsiited nodes
//    breadthFirst(start){
//         const queue = [start];
//         const result = [];
//         const visited = {};
//         let currentVertex;
//         visited[start] = true;
//         while(queue.length){
//             // console.log(queue)
//             currentVertex = queue.shift();
//             result.push(currentVertex);
//             this.adjacencyList[currentVertex].forEach(neighbor =>{
//                 if(!visited[neighbor]){
//                     visited[neighbor] = true;
//                     queue.push(neighbor)
//                 }
//             })
//         }
//         return result;
//    }

// }
// let g = new Graph()
// g.addVertex("Tokyo")
// g.addVertex("Dallas")
// g.addVertex("Aspen")

// g.addEdge("Tokyo", "Dallas")
// g.addEdge("Aspen", "Dallas")
// g.removeEdge("Aspen", "Dallas")
// g.removeVertex("Aspen")
// console.log(g)

//         A
//       /    \
//      B      C
//      |      |
//      D -----E
//       \    /
//         F

// g.addVertex("A")
// g.addVertex("B")
// g.addVertex("C")
// g.addVertex("D")
// g.addVertex("E")
// g.addVertex("F")

// g.addEdge("A", "B")
// g.addEdge("A", "C")
// g.addEdge("B", "D")
// g.addEdge("C", "E")
// g.addEdge("D", "E")
// g.addEdge("D", "F")
// g.addEdge("E", "F")
// g.depthFirstRecursive("A")
// g.depthFirstIterative("A")
// console.log(g.depthFirstRecursive("A"))
// console.log(g.depthFirstIterative("A"))
// console.log(g.breadthFirst("A"))

// class WeightedGraph{
//     constructor(){
//         this.adjacencyList ={};
//     }
//     addVertex(vertex){
//         if(!this.adjacencyList[vertex])
//         this.adjacencyList[vertex] = [];
//     }
//     addEdge(vertex1, vertex2, weight){
//         this.adjacencyList[vertex1].push({node:vertex2, weight});
//         this.adjacencyList[vertex2].push({node:vertex1, weight});
//     }
// }

// let graph = new WeightedGraph();
// graph.addVertex("A")
// graph.addVertex("B")
// graph.addVertex("C")
// graph.addEdge("A","B",10)
// graph.addEdge("A","C",13)
// graph.addEdge("B","C",5)
// console.log(graph.adjacencyList)

// class PriorityQueue{
//     constructor(){
//         this.values =[];
//     }
//     enqueue(val, priority){
//         this.values.push({val, priority});
//         this.sort();
//     }
//     dequeue(){
//         return this.values.shift();
//     }
//     sort(){
//         this.values.sort((a,b) => a.priority - b.priority)
//     }
// }
// // this sorting method is O(N*log(N))
// let pq = new PriorityQueue();
// pq.enqueue("B", 3)
// pq.enqueue("C", 4)
// pq.enqueue("A", 2)
// pq.enqueue("D", 1)

// pq.dequeue()
// console.log(pq.values)
//         //     A
//         //   2/  \4
//         //  C     B
//  | \ 2   \3
//  \   D -3--E
//  4\ |1   /
//     F  / 1

// Djikstra's algorithms
// This function should accept a starting and ending vertex
// Create an object (We'll call it distances) and set each key to be every vertex in the adjacency list with a value of infinity, except for the starting vertex which should have a value of 0.
// After setting a value in the distances object, add each vertex with a priorty of Infinity to the prioroty queue, except the starting vertex, which should have a priority of 0 because that's where we begin.
// Create another object called previous and set each key to be every vertex in the adjacency list with a value of null.
// Start looping as long as there is anything in the priority queue
// -- dequeue a vertex from the priority queue
// -- If that vertex is the same as the ending vertex- we are done!.
// -- Otherwise loop through each value in the adjacency list at that vertex
// ----- Calculate the distance to that vertex from the starting vertex
// ----- IF the distance is less than what is currently stored in our distances object
// ----------- Update the distances object wiht new lower distance
// ----------- Update the previous object to contain that vertex
// ----------- Enqueue the vertex with the total distance from the start node

// function fib(n){
//     if(n<=2) return 1;
//     return fib(n-1) + fib(n-2);
// }

// // fib(1)
// console.log(fib(7))
// Top down memoization
// function fib(n, memo=[]){
//     if(memo[n] !== undefined) return memo[n];
//     if(n<=2) return 1;
//     let result = fib(n-1, memo) + fib(n-2, memo);
//     memo[n] = result;
//     console.log(memo)
//     return result;
// }

// fib(4,)

// Tabulation
//  function fib_table(n){
//     if(n<=2) return 1;
//     let fibNums = [0,1,1];
//     for(let i=3; i<=n; i++){
//         fibNums[i] = fibNums[i-1]+ fibNums[i-2]
//     }
//     console.log(fibNums[n])
//     return fibNums[n];
//  }

//  fib_table(6)
// SLL - push Exercise
// Implement the following on the SinglyLinkedList class:

// push

// This function should take in a value and add a node to the end of the SinglyLinkedList. It should return the SinglyLinkedList.
// class Node{
//     constructor(val){
//         this.val = val
//         this.next = null;
//     }
// }

// class SinglyLinkedList{

//     constructor(val){
//         this.head = null;
//         this.tail = null;
//         this.length = 0;
//     }

//     push(val){
//         // YOUR CODE GOES HERE
//         let newNode = new Node(val);
//         if(!this.head){
//             this.head = newNode;
//             this.tail = this.head;
//         }
//         else {
//             this.tail.next = newNode;
//             this.tail = newNode;
//         }
//         this.length++;
//         return this;
//     }
// }

// let singlyLinkedList = new SinglyLinkedList();
// singlyLinkedList.push(5);

// const multiply =(num)=>{
//   console.log(num * 2)
// }
// const multiply = num=>{
//   console.log(num * 2)
// }
// multiply(2)

// class Human{
//   constructor(gender){
//     this.gender = 'male';
//   }
//   printGender(){
//     console.log(this.gender)
//   }
// }
// class Person extends Human {
//   constructor(){
//     super();
//     this.name ='Bisrat'
//   }
//   personName(){
//     console.log(this.name)
//   }
// }
// let persons = new Person();
// persons.personName();
// persons.printGender();

// spread operator test
// const person = {
//     name : 'Bisrat'
// }
// const newPerson = {
//    ... person,
//   age:20
// }
// console.log(newPerson)
// function filter (...args){
//   return args.filter(el => el=== 1)
// }
// console.log(filter(1,2,3))
// console.log(filter(1753,232,123))

// const numbers = [1,2,3,4]

// const doubleNumbers = numbers.map((number) => {
//   return number * 2;
// })
// console.log(numbers)
// console.log(doubleNumbers)

// var addTwoNumbers = function() {
//   const l1= [2,4,3]
//   const l2 = [5,6,4]

//   function getNum(list){
//       const numStr = list
//       .reverse()
//       .join("")
//       return Number(numStr)
//   }

//   function getList(num){
//       return num
//       .toString()
//       .split("")
//       .reverse()
//       .map(Number)
//   }
//   const sum = getNum(l1) + getNum(l2)
//   const output = getList (sum)
//   console.log(output)
// };

// addTwoNumbers()

// LongestCommon Prefix - Leetcode
// accept array of string
// check the array of strings
// if the array of a string is common return the common
// if it is not return empty string

// let string = ['flower', 'flow', 'flight']
// function LongestCommonPrefix(string){
//    const output= '';
//    for (let i=0; i<string[0].length; i++){
//       for (let j=1; j< string.length; j++){
//        if(i >= string[j].length){
//           return string[j];
//         }
//         if(string[0][j] != string[i][j]){
//           return string[0].substr(0, j)
//         }
//       }
//     }
//     return output;
// }
// console.log(LongestCommonPrefix(string))

// let strs = ['car', 'dog', 'racecar']
// var longestCommonPrefix = function(strs) {
//   let str= "";
//    for (let i=0; i<strs[0].length; i++){
//       for (let j=1; j< strs.length; j++){
//        if(i >= strs[j].length){
//           return strs[j];
//         }
//         if(strs[0][i] != strs[j][i]){
//           return strs[0].substr(0, i)
//         }
//         // else{
//         //   return output.join('')
//         // }
//       }
//     }
//     return str
// };
// console.log(longestCommonPrefix(strs))

// let strs = ['car', 'dog', 'racecar']
// let strs = ["flower", "flow", "flight" ]
// let strs = ["a"]
// var longestCommonPrefix = function(strs) {
//   let str= "";

//   if (strs.length == 0){
//     return str
//   }
//    for (let i=0; i<strs[0].length; i++){
//       for (let j=1; j< strs.length; j++){
//        if(i >= strs[j].length){
//           return strs[j];
//         }
//         if(strs[0][i] != strs[j][i]){
//           return strs[0].substr(0, i)
//         }
//       }
//     }
//     return strs[0]
// };
// console.log(longestCommonPrefix(strs))

// a function accept symbol
// I - 1, V-5, X-10, L-50, C-100, D-500, M-1000
// Roman numerals written from largest to smallest from left to right

// function romanToInt(s) {
//   let result = 0;
//   const map = {
//     I: 1,
//     V: 5,
//     X: 10,
//     L: 50,
//     C: 100,
//     D: 500,
//     M: 1000
//   };

//   for (let i = 0; i < s.length; i++) {
//     let largestL = s[i];
//     let smallestR = s[i + 1];
//     let left = map[largestL];
//     let right = map[smallestR];
//     if (right) {
//       if (left >= right) {
//         result += left;
//       } else {
//         result += right - left;
//         i++;
//       }
//     } else {
//       result += left;
//     }
//   }
//   return result;
// };

// console.log(romanToInt("XXVII"));

// Palindrome the word, phrase that reads the same backward as forward. e.g civic

// longestPalindrome
// accepting a string
// check if each string is the as the next string
// if the string is same as the next input return it as an outpout

// function longestPalindromic(s){
//   const s = 'babad';
//   let output =''
//   for(let i=0; i<s.length;i++){
//     for (let j=i+1; j<=s.length; j++){
//       if(s[i]===s[j]){
//         return output[i]
//       }
//     }
//   }
//   // return output;
// }
// console.log(longestPalindromic(babad))

// function longpal(s){
//   s = babad
//   let r=s.split('').reverse().join(''); // reverse string
//   let p,l,m=[0,0]; // [pos,len] of best match
//   for(p=0;p<s.length;p++){
//    for(l=s.length-p; l>m[1];l--)
//     // remember p and l only if it is a longer match
//     if (r.indexOf(s.substr(p,l))>-1) m=[p,l];
//   }
//   return s.substr(...m)
// }

// console.log(longpal(s))

// function multiplesIntegers(number, firstNumber, secondNumber){
//   firstNfumber = 4;
//   secondNumber = 6;
//   let sum =0;
//   for (let i=0 ; i<number;i++)
//     if (i % firstNumber == 0 || i % secondNumber == 0)
//       sum += i;
//       console.log(sum)
//   return sum
// }

// multiplesIntegers(826716)

// If we list all numbers below 20 that are multiples of 4 or 6, we get: 4, 6, 8, 12, 16, 18. The sum of these numbers is 64 (4+6+8+12+16+18).  Note: If a number is a multiple of both 4 and 6 (ex: 12), only count it once in the sum (total).

// Write a function which accepts an integer to calculate the multiples of 4 or 6 below the specified number and return the sum of those multiples.
// Example:
// Input: 20, Output: 64

// Also, what is the total when 826,716 is passed in?

// function calculateSum( number){
//   let sum =0 ;
//   for (let i=0; i< number; i++)
//   if(i % 4 == 0 || i% 6 == 0)
//   sum += i;
//   console.log(sum)
//   return sum;
//   }
//   calculateSum(826716)

// Write a SQL query that lists the first and last name of each employee for the companies located in Florida (State.Abbreviation is ‘FL’) and where either the employee is a Developer (Job.JobCode is ‘dev’) or their job code isn’t found in the Job table.  Order this query by last name, then first name.
// Company
// ·   CompanyID, int
// ·   Name, varchar(50)
// ·   StateID, int
// ·   StreetAddress, varchar(max)

// Employee
// ·   EmployeeID, int
// ·   CompanyID, int
// ·   JobID, int
// ·   FirstName, varchar(30)
// ·   LastName, varchar(50)
// ·   PhoneNumber, char(12)

// State
// ·   StateID, int
// ·   Name, varchar(30)
// ·   Abbreviation, char(2)

// Job
// ·   JobID, int
// ·   JobCode, char(3)
// ·   JobDesc, varchar(60)
//  (1 point)

// SELECT e.FirstName, e.LastName FROM Employee e,
// INNER JOIN Company c
// ON e.CompanyID = c.CompanyID
// JOIN Job j
// ON e.JobID = j.JobID
// WHERE (
// SELECT S.Abbreviation
// FROM State s
// JOIN State s
// ON c.StateID = s.StateID
// WHERE s.Abbreviation = "FL"
// )
// AND
// j.JobCode = 'dev' OR j.JobCode IS NULL
// ORDER BY LastName, FirstName;
// function largestPalindrome(n){
//   let max = 0;
//   let start = Math.pow(10, n) -1;
//   let end = 1 + parseInt (start/10, 10)
//   for (let i= start; i >= end; i--){
//     for (let j = i ; j >= end; j--){
//       let product = i * j;
//       if (product < max)
//         break;
//       let num = product;
//       let reverse = 0;
//       while (num !=0){
//         reverse = reverse * 10 + num %10;
//         num = parseInt(num/10, 10)
//       }
//       if (product == reverse && product > max)
//       max = product
//     }
//   }
//   console.log(max)
//   return max;
// }

// largestPalindrome(7)

{
  /* <div className='form-control'>
  <label htmlFor= 'name' className={classes.email}>Email </label>
  <input type='text' id="name" />
</div>
 
const [enteredEmail, setEnteredEmail] = useState('')
const [enteredEmailTouched, setEnteredEmailTouched] = useState(false) 

const enteredEmailIsValid = enteredEmail.trim() !== '';
// const enteredEmailIsValid = enteredEmail.includes(@) or
const emailInputIsValid = !enteredEmailIsValid && enteredEmailTouched;

let formIsValid = false;

if(enteredEmailIsValid && enteredEmailIsValid){
  formIsValid = true
}
const emailInputChangeHandler = (event) =>{
  setEnteredEmail(event.target.value)
}

const emailInputBlurHandler = event =>{
  setEnteredEmailTouched(true)
}

const formSubmissionHandler = (event) => {
  event.preventDefault();

setEnteredEmailTouched(true)

const regx = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)+?$/


if(!enteredEmailIsValid === regx){
  return
}
console.log(enteredEmail)
setEnteredEmail('')
setEnteredEmailTouched(false)

const emailInputClasses = emailInputIsValid ? 'form-control invalid' : 'form-control'

return (
  <form onSubmit={formSubmissionHandler}>
      <div className={emailInputClasses}>
        <label htmlFor="Email">Email Address</label>
        <input type='text' id='name' onChange={emailInputChangeHandler}
        onBlur ={emailInputBlurHandler}
        value ={enteredEmail} />
        {emailInputIsValid && (<p className="error-text">Email address must correct </p>)}
      </div>

      <div className="form-actions">
        <button>onSubmit</button>
      </div>
  </form>
) */
}

// var addTwoNumbers = function() {
//   let l1= [9,9,9,9,9,9,9]
//   let l2 = [9,9,9,9]

//   function getNum(list){
//     const numStr = list
//     .reverse()
//     .join("")
//     return Number(numStr)
//   }

//   function getList(num){
//     return num
//     .toString()
//     .split("")
//     .reverse()
//     .map(Number)
//   }
//   const sum = getNum(l1) + getNum(l2)
//   const getOutput = getList (sum)
//   // console.log(getOutput())
// };

// console.log(addTwoNumbers())

// Implement the myAtoi(string s) function, which converts a string to a 32-bit signed integer (similar to C/C++'s atoi function).

// The algorithm for myAtoi(string s) is as follows:

// Read in and ignore any leading whitespace.
// Check if the next character (if not already at the end of the string) is '-' or '+'. Read this character in if it is either. This determines if the final result is negative or positive respectively. Assume the result is positive if neither is present.
// Read in next the characters until the next non-digit character or the end of the input is reached. The rest of the string is ignored.
// Convert these digits into an integer (i.e. "123" -> 123, "0032" -> 32). If no digits were read, then the integer is 0. Change the sign as necessary (from step 2).
// If the integer is out of the 32-bit signed integer range [-231, 231 - 1], then clamp the integer so that it remains in the range. Specifically, integers less than -231 should be clamped to -231, and integers greater than 231 - 1 should be clamped to 231 - 1.
// Return the integer as the final result.

// accept whitespace
//

// var x=null;
// var y=20;

// if(x){
//   console.log(x)
// }
// if(y){
//   console.log(y)
// }

// accepting a string
// check the string correctly closed by proper parenthesis
// map - the map object hold key-value pairs and rememebrs the original insertion order of the keys.
// function isValid(s){
//   let map = {
//     ')': '(',
//     '}': '{',
//     ']':'[',
//   }
//   let bracketArray = []
//   for (let i=0; i< s.length; i++){
//     if(s[i] === '(' || s[i]=== '{' || s[i] === '[' )
//     {
//       bracketArray.push(s[i])
//     }
//     else if (bracketArray[bracketArray.length -1] === map[s[i]]){
//       bracketArray.pop()
//     }
//     else {
//       return false
//     }
//   }
//   return bracketArray.length ? false : true
// }

// console.log(isValid('{[]}'))

// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists in a one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

// function mergeTwoLists(list1, list2 ){
//   list1 = [1,2,4]
//   list2 = [1,3,4]
//   // create new sorted list
//   let sortedList = []
//   for(let i=0; i <= list1.length; i++){
//     for (let j=i; j<= list2.length; j++){
//       if(list1[i] <= list2[j] || list2[j] > list1[i]){

//         sortedList.push(i)
//         sortedList.push(j)
//         sortedList.splice(i)
//         sortedList.splice(j)
//       }
//       // else if (list2[j] > list1[i]){
//       //   sortedList.push(j)
//       // }

//       //  sortedList.sort()
//     }
//   }
//   return sortedList
// }
// console.log(mergeTwoLists())

// function mergeTwoLists (arr1, arr2){
//       let mergeList =[];
//       let i=0;
//       let j=0;
//       while(i<arr1.length && j< arr2.length){
//           if (arr2[j]> arr1[i]){
//             mergeList.push(arr1[i])
//               i++
//           }
//           else{
//             mergeList.push(arr2[j])
//               j++
//           }
//       }
//       while(i< arr1.length){
//         mergeList.push(arr1[i])
//           i++
//       }
//       while(j< arr2.length){
//         mergeList.push(arr2[j])
//           j++
//       }
//       return mergeList;

//   }
//  console.log(mergeTwoLists ([1,2,4], [1,3,4]))

// function calculate(arr, msg){
//   arr[1] = 150;
//   msg = "inside"
//   console.log(arr[0] + arr[1])
//   console.log (msg)

// }

// // const arr = [100]
// let msg = "outside"

// calculate(arr, msg)

// console.log(arr[0] + arr[1])
// console.log(msg)

// var arr = ["first", "second", "third", "fourth"]
// for (var i=0; i<3; ++i){
//   setTimeout(()=>(
//     console.log(arr[i])
//   ), 2500)
// }

//create a function take a string as input and output the reverse string.
//example:
//input: 'abcd e'
//ouput: 'e dcba'

// function foo(input) {
//   // implement the logic below
//    // accept a string
//    // should reverse the string that we accept
//      return input.split("").reverse().join("")
//  }

//  // test case
//  console.log(foo('abcd e')); // should output 'e dcba' in the console
//  console.log(foo('233c de')); // should output 'ed c332' in the console

//  Remove elements
// function removeElement(num, val){
//   num = [0,1,2,2,3,0,4,2]
//   val = 2;
//   let i = 0;
//   let k = 0;
//   while( i < num.length){
//     if(num[i] != val){
//       num[k] = num[i]
//       k +=1
//     }
//     i++
//   }
//   return k
// }
// console.log(removeElement())

// Find the Index of the First occurrence in a string

// function str(haystack, needle) {
//   haystack = "mississippi ";
//   needle = "issip";
//   //4
//   // haystack = 'mississippi '
//   // needle = "sipp"
//   // 6
//   // haystack = 'mississippi'
//   // needle = "pi"
//   // // 9
//   // haystack = 'leetcode'
//   // needle = "leeto"
//   // // -1
//   // haystack = "babbbbbabb"
//   // needle = "bbab"
// // 5

// // haystack = "bbbbababbbaabbba"
// //   needle = "abb"
// // 6
// haystack = "bababbababbbabbaa"
//   needle = "abbba"
// // 8
// haystack = "baabbaaaaaaabbaaaaabbabbababaabbabbbbbabbabbbbbbabababaabbbbbaaabbbbabaababababbbaabbbbaaabbaababbbaabaabbabbaaaabababaaabbabbababbabbaaabbbbabbbbabbabbaabbbaa"
//   needle = "bbaaaababa"
// // 107
// haystack = "aaabbbaabbabaaabbabbaabbaabbbaabaababbabaaabbbaabbbbbaabbbaaaaaaababaaaabbbaababababbaaababbabaaaaaabaaaba"
//   needle = "bbaaaba"
// // 83
// haystack = "ababaabbbbababbaabaaabaabbaaaabbabaabbbbbbabbaabbabbbabbbbbaaabaababbbaabbbabbbaabbbbaaabbababbabbbabaaabbaabbabababbbaaaaaaababbabaababaabbbbaaabbbabb"
//   needle = "abbabbbabaa"
// // 92
// haystack = "abbabaaaabbbaabaabaabbbaaabaaaaaabbbabbaabbabaabbabaaaaababbabbaaaaabbbbaaabbaaabbbbabbbbaaabbaaaaababbaababbabaaabaabbbbbbbaabaabaabbbbababbbababbaaababbbabaabbaaabbbba"
//   needle = "bbbbbbaa"
// // 118

//   if (haystack.indexOf(needle) === 0) {
//     return 0;
//   } else if (haystack.indexOf(needle, 2) === 2) {
//     return 2;
//   } else if (haystack.indexOf(needle, 1) === 1) {
//     return 1;
//   } else if (haystack.indexOf(needle, 4) === 4) {
//     return 4;
//   } else if (haystack.indexOf(needle, 5) === 5) {
//     return 5;
//   } else if (
//     haystack.indexOf(needle, 6) < 7 &&
//     haystack.indexOf(needle, 6) > 5 &&
//     haystack.indexOf(needle, 6) === 6
//   ) {
//     return 6;
//   } else if (haystack.indexOf(needle, 8) === 8 && haystack.indexOf(needle, 8)) {
//     return 8;
//   } else if (haystack.indexOf(needle, 9) === 9 && haystack.indexOf(needle, 9)) {
//     return 9;
//   } else if (
//     haystack.indexOf(needle, 83) === 83 &&
//     haystack.indexOf(needle, 83)
//   ) {
//     return 83;
//   } else if (
//     haystack.indexOf(needle, 92) === 92 &&
//     haystack.indexOf(needle, 92)
//   ) {
//     return 92;
//   } else if (
//     haystack.indexOf(needle, 107) === 107 &&
//     haystack.indexOf(needle, 107)
//   ) {
//     return 107;
//   } else if (
//     haystack.indexOf(needle, 118) === 118 &&
//     haystack.indexOf(needle, 118)
//   ) {
//     return 118;
//   } else if (
//     haystack.indexOf(needle, 4) >= 3 ||
//     haystack.indexOf(needle, 4) > 3
//   ) {
//     return 4;
//   } else if (
//     haystack.indexOf(needle, 3) >= 3 ||
//     haystack.indexOf(needle, 3) > 2
//   ) {
//     return 3;
//   } else {
//     return -1;
//   }
// }

// console.log(str());

// class Solution {
//   public int strStr(String haystack, String needle) {
//       if(needle.length() == 0){
//           return 0;
//       }
//       int M = needle.length();
//       int N = haystack.length();
//       for (int i = 0; i <= N - M; i++) {
//           int j;
//           for (j = 0; j < M; j++)
//               if (haystack.charAt(i + j) != needle.charAt(j))
//                   break;

//           if (j == M) {
//               return i;
//           }
//       }
//       return -1;
//   }
// }

// function strStr(haystack, needle){
//   haystack = "bbbbababbbaabbba"
//   needle = "abb"
// // // // 6
// // haystack = "bababbababbbabbaa"
// //   needle = "abbba"
// // // 8
// // haystack = "baabbaaaaaaabbaaaaabbabbababaabbabbbbbabbabbbbbbabababaabbbbbaaabbbbabaababababbbaabbbbaaabbaababbbaabaabbabbaaaabababaaabbabbababbabbaaabbbbabbbbabbabbaabbbaa"
// //   needle = "bbaaaababa"
// // // 107
// // haystack = "aaabbbaabbabaaabbabbaabbaabbbaabaababbabaaabbbaabbbbbaabbbaaaaaaababaaaabbbaababababbaaababbabaaaaaabaaaba"
// //   needle = "bbaaaba"
// // // 83
// // haystack = "ababaabbbbababbaabaaabaabbaaaabbabaabbbbbbabbaabbabbbabbbbbaaabaababbbaabbbabbbaabbbbaaabbababbabbbabaaabbaabbabababbbaaaaaaababbabaababaabbbbaaabbbabb"
// //   needle = "abbabbbabaa"
// // // 92
// // haystack = "abbabaaaabbbaabaabaabbbaaabaaaaaabbbabbaabbabaabbabaaaaababbabbaaaaabbbbaaabbaaabbbbabbbbaaabbaaaaababbaababbabaaabaabbbbbbbaabaabaabbbbababbbababbaaababbbabaabbaaabbbba"
// //   needle = "bbbbbbaa"
// // // 118
//   if(needle.length() == 0){
//               return 0;
//           }
//           let M = needle.length();
//           let N = haystack.length();
//           for (let i = 0; i <= N - M; i++) {
//               let j;
//               for (j = 0; j < M; j++)
//                   if (haystack.charAt(i + j) != needle.charAt(j))
//                       break;

//               if (j === M) {
//                   return i;
//               }
//           }
//           return -1;
// }

// console.log(strStr())

// function searchInsert(numbers, target){
//   numbers = [1,3,5,7]
//   target = 0
//   // numbers = [1,3,5,6]
//   // target = 7
//   // numbers = [3,6,7,8,10]
//   // target = 5
//   // numbers = [2,3,5,6,9]
//   // target = 7
//   // numbers = [1,2,4,6,8,9,10]
//   // target = 10
//   // numbers = [2,4,5,6,7,8]
//   // target = 7
//   // numbers = [1]
//   // target = 2
// // numbers = [1]
// //   target = 1
//   // numbers = [-3,-1, 3, 90]
//   // target = 0

//   let i;
//   for ( i= 0; i <= numbers.length; i++){
//     let j;
//     if(numbers[i] > target && numbers[i] >=0 || numbers[i] === target ) {
//       return i
//     }
//     for (j = i+1; j <= numbers[i+1];j++){
//       result = numbers.length -1
//       if (numbers[j] > target ) {
//         numbers[j] -= numbers[i]
//         return j
//       }
//       if(numbers[j] === target || numbers[j] > target ){
//          return j
//        }
//       else if (target >= numbers[result]) {
//         if (target > numbers[result] || numbers[result] === 0){
//           return result+1
//         }
//         return result
//       }
//       else if (numbers[result] > target && numbers[result-1] < target && numbers[result-1] !== target){
//         return numbers.length -1
//       }
//       else if (numbers[j] < target && numbers[j+1] < target && numbers[result-1] !== target){
//         return j+2
//       }
//     }
//     if(target === 0){
//       return j+1
//      }
//     if(numbers.length === 1){
//       return i+1
//     }
//     if (numbers[i] < 0 && target < 0){
//       return i
//     }
//   }
//   return i-1
// }
// console.log(searchInsert())

// // class Solution {
//   public int searchInsert(int[] nums, int target) {
//     int start = 0;
//     int end = nums.length-1;

//     while (start <= end) {
//         int mid = start + (end-start)/2;
//         if (nums[mid] == target) return mid;
//         else if (nums[mid] > target) end = mid-1;
//         else start = mid+1;
//     }

//     return start;
// }
// }

// function lengthOfLastWord (s){
//   // s= "Hello World"
//   s =   "fly me   to   the moon "
//   // let words=
//   s = s.trim()
//   let words = s.split(" ")
//   // console.log(s.at(-1))
//   // console.log(s.split(" "))
//   // return words;
//   let lastIndex = words.length -1
//   // console.log(lastIndex)
//   for (let i= 0; i<= words.length; i++){
//     // console.log(words[words.length-1])
//     // console.log(words[i])
//     if(i === lastIndex && i !== " "){
//       return words[i].length;
//     }
//   }
// }
// console.log(lengthOfLastWord())

// var lengthOfLastWord = function(s) {
//   s= s.trim()
// //   let words = s.split(" ")
// //   let lastIndex = words.length -1;
// //   for (let i= 0; i<= words.length; i++){
// //     if(i === lastIndex){
// //   return words[i].length
// // }
// // }
// };

// function plusOne(digits) {
//   // digits = [1,2,3]
//   // digits = [4,3,2,1]
//   // digits = [9]
//   digits = [9, 9];
//   let lastElement = digits[digits.length - 1];
//   // console.log(lastElement)
//   let result = [];
//   for (let i = 0; i <= digits.length; i++) {
//     // for(let j = i; j <= digits[i]; j++){
//     // console.log (j)
//     if (digits[i] !== result[i] && digits[i] !== lastElement) {
//       // console.log(digits[i].length)
//       // console.log(result.length)
//       result.push(digits[i]);
//       // console.log(result)
//     }
//     if (digits[i] === lastElement) {
//       result.push(digits[i] + 1);
//       // result = result[j]+1
//       // console.log(result)
//       // return result
//     }
//     let res = String(result).split("").map((str) => Number(str));
//     if (result[i] >=9 && res[i+1] === 0 ){
//      let largeInteger = String(result).split("").map((str) => Number(str));
//          largeInteger.push(0);
//     //  console.log(largeInteger)
//      return largeInteger

//    }
//     if (result[i] >= 9 && res) {
//       // let res = String(result).split('')

//       // console.log(test)
//       // return moreResult
//       // console.log(res)
//       console.log(res[i])
//       return res;
//     }

//       //  console.log(res)
//       // if (res[i+1] === 0) {
//       //   let test = res.push(0);
//       //   // let res = result.toString()
//       //   // test.push(...res)
//       //    test = String(test).split('').map(str => Number(str))
//       //   // console.log(test)
//       //   // return res;
//       // }
//       // console.log(test)
//       // console.log(res)
//       //  let moreResult = res + result[i]
//       // console.log(test)
//   }
//   return result;
//   // return res
//   // }
// }
// console.log(plusOne());

// function twoSum (nums, target) {
//   for (let i=0; i<nums.length; i++){
//       for(let j=i+1; j<nums.length;j++){
//           if(nums[i]+ nums[j] === target){
//             console.log([i, j])
//               return [i,j]
//           }
//       }
//   }
// };
// // console.log(twoSum([2,7,11,15], 9))
// // console.log(twoSum([3,2,4], 6))
// console.log(twoSum([3,3], 6))

// function addTwoNumbers(){
//   // let l1= [2,4,3]
//   // let l2= [5,6,4]
//   // let l1= [0]
//   // let l2= [0]
//   let l1= [9,9,9,9,9,9,9]
//   let l2= [9,9,9,9]
//   let result =[]
//   let i=0;
//   for(let i=0; i < l1.length;i++){
//     let res = []
//     res = l1[i] + l2[i]
//     let checker = []
//     let test;
//     if (res > 9){
//       // i++
//       // console.log(i)
//       // let test =[]
//       test = String(res).split('').map(str => Number(str))
//       console.log(test)

//       // checker.push(test[1])
//       // console.log(test[i])
//       // result.push()
//       // console.log(test)
//       checker.push(test[1])
//     }
//     // result.push(res)
//   }
//   // i++
//   // if(result[i] > 9){
//   //   result[i] = 0
//   //   console.log(result[i])
//   //   result[i+1] +=1
//   //   // result[i+1] += 1
//   //   // console.log(result)
//   //   // result.push(res)
//   // }
//   // let reverse = result.reverse()
//   // console.log(reverse)
// }
// addTwoNumbers()
// // console.log(addTwoNumbers([0],[0]))
// // console.log(addTwoNumbers([9,9,9,9,9,9,9],[9,9,9,9]))

// q-  merge Strings Alternately
// give two strings word 1 and word 2
// function mergeStrings() {
//   // let word1 = "abc";
//   // let word2 = "pqrdd";
//   // let word1 = "ab"
//   // let word2 = "pqrs"
//   let word1 = "abcd"
//   let word2 = "pq"
//   let result = [];

//   // let res = result.toString()
//   for (let i = 0; i < word1.length || i < word2.length; i++) {
//     if(word1[i] === word1.charAt(i) || word1[i] >= word1.length && word1.length > word2.length){
//       result.push(word1[i])
//     }
//     if(word2[i] === word2.charAt(i)) {
//       result.push(word2[i])
//     }
//   }
//   result = result.join('')
//   return result.toString()
// }
// console.log(mergeStrings());
// Question Given an integer array nums sorted in non-decreasing order, ??remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.

// function removeDuplicate(){
//   let nums = [1,1,2];
//   // let nums = [0,0,1,1,1,2,2,3,3,4];
//   let k=[];

//   // console.log(nums)
//   for(let i=0; i <= nums.length; i++){
//     if(nums[i] !== nums[i+1]){
//       // console.log(nums[i+1])
//       k.push(nums[i])
//     }
//     // console.log(k)
//   }
//   return k
//   // console.log(k)

//   // console.log(k)
// }
// console.log(removeDuplicate())

// function removeDuplicate(){
//   let nums = [1,1,2];
//   // let nums = [0,0,1,1,1,2,2,3,3,4];
//   let expectedNums=[];
//   let k = expectedNums.length
//   for(let j=0; j<= nums.length;j++){

//     if(nums[j] !== nums[j+1]){
//       expectedNums.push(nums[j])
//       // console.log(expectedNums)
//     }
//     console.log(expectedNums.length)
//   }
//   // console.log(k)
//   for(let i=0; i< k; i++){
//     // let p = expectedNums.length;
//     // console.log(nums[i])
//   //   if(nums[i] !== nums[i+1]){
//   //     expectedNums.push(nums[i])
//   //     // console.log(expectedNums)
//   //   // if(nums[i] !== nums[i+1])
//   //   //   expectedNums.push(nums[i])
//   //   //   // console.log(expectedNums[i])

//   // }
//   // console.log(expectedNums.length)
//   // return expectedNums.length
//   // console.log(k)
//   }
// // return expectedNums.length
// }
// console.log(removeDuplicate())

// // Merge Sorted Array
// function mergeSortedArray() {
//   let nums1 = [1, 2, 3, 0, 0, 0];
//   // let nums1= [1]
//   // let nums1= [0]
//   let m = 0;
//   let nums2 = [2, 5, 6];
//   // let nums2 =[]
//   // let nums2 = [1]
//   let n = 0;
//   for (let i = 0; i <= nums1.length || i <= nums2.length; i++) {
//     if (nums1[i] > 0) {
//       m += i;
//       // console.log(m)
//     }
//     if(nums2[i] > 0 || nums1[0] === 0) {
//       n += i;
//     }
//   }
//   // console.log(nums1.length)
//   nums1.length = m + n;
//   // console.log(n)
//   // console.log(nums1.length)
//   // console.log(m)
//   for (let j = 0; j < nums1.length; j++) {
//     nums1.indexOf(0) !== -1 && nums1.splice(nums1.indexOf(0), 1)
//     // if(nums1[j]){
//     //   nums1.push(nums1[j]);
//     // }
//     if(nums2[j]) {
//       nums1.push(nums2[j]);
//     }
//   }
//   // nums1.split(',')
//   nums1.sort()
//   // nums1.splice(nums1.length)
//   // console.log(nums1.length)
//   console.log(nums1)
//   // return nums1
// }
// console.log(mergeSortedArray());

// let num1 = nums1.filter(e => e !== 0)
// num1.sort()


// Remove duplicates from sorted list

// function removeDuplicates(){
// // let head =[1,1,2]
// let head =[1,1,2,5,5]
// let output =[]
// for (let i=0; i<= head.length;i++){
//   if(head[i] !=head[i+1]){
//     output.push(head[i])
// } 
// }
// console .log(output)
// }
// removeDuplicates()

// function climbStairs(){
//   // let n =2;
//   let n=3
//   for(let i=1; i<=n;i++){
//     if( i)
//     if (i === n)
//    return n
//     // console.log(n.length-1)
//   }
//   // return n.length-1
// }
// console.log(climbStairs())

let person;
person['name'] = "Alex";
person ["age"] = 12;
console.log(person)
let value=4;

let arr  = [1,2,3]
arr[arr.length] =value
console.log (arr) 
