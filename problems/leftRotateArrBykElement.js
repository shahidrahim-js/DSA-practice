export const leftRotateArrBykElement = function(nums, k) {
    const n = nums.length;
    k %= nums.length;
    
    // Reverse the first k elements.
    reverseArr(nums, 0, k-1);
    //Reverse the rest elements from k element to last element.
    reverseArr(nums, k, n-1);
    //Reverse the whole elements.
    reverseArr(nums, 0, n-1);

  return nums;
}

// Swap the array
function reverseArr(arr, start, end) {
    while (start < end) {
        // let temp = arr[start];
        // arr[start] = arr[end];
        // arr[end] = temp;
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
    }
}