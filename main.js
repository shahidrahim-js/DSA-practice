import { isPalindrome } from './problems/palindromeNumber.js';
import {twoSumWithTarget} from './problems/twoSumWithTarget.js';
import { averageWaitingTime } from './problems/leetcodeProblems/averageWaitingTime.js';

// Check if given number is Palindrome or not.
console.log('isPalindrome:', isPalindrome(121));


const nums = [2, 7, 11, 15],
  target = 9;
const nums1 = [4, 2, -1, 6, 5],
  target1 = 4;
const twoSum = twoSumWithTarget(nums, target);
const twoSum1 = twoSumWithTarget(nums1, target1);
console.log('twoSum:', twoSum);
console.log('twoSum1:', twoSum1);

// Average Waiting Time...
const customers = [
  [1, 2],
  [2, 5],
  [4, 3],
];
const customers2 = [
  [5, 2],
  [5, 4],
  [10, 3],
  [20, 1],
];
console.log('averageWaitingTime:', averageWaitingTime(customers));