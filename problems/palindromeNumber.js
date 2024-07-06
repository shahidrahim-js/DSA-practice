export const isPalindrome = (x) => {
  if (x < 0) {
    return false;
  }

  let reverseNum = 0;
  let temp = x;

  while (temp > 0) {
    let digit = temp % 10;
    reverseNum = reverseNum * 10 + digit;
    temp = parseInt(temp / 10);
  }

  return x === reverseNum;
};
