/**
 * Given an array of integers nums and an integer target, return indices of the
 * two numbers such that they add up to target.
 * We cannot use the same element twice in nums.
 *
 *  `
 *    Input: nums = [2,7,11,15], target = 9
 *    Output: [0,1]
 *    Explanation: Because nums[0] + nums[1] == 9, we return [0, 1]
 *  `
 */
export function twoSumWithTarget(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
      const difference = target - nums[i];
      if (map.has(difference)) {
        return [map.get(difference), i];
      }
      map.set(nums[i], i);
    }
    return [];
  }
  