function calculateCrossSum(
  nums: number[],
  left: number,
  mid: number,
  right: number,
): number {
  let leftBestSum = 0;
  let leftRunningSum = 0;
  for (let i = mid - 1; i >= left; i--) {
    leftRunningSum += nums[i]!;
    leftBestSum = Math.max(leftBestSum, leftRunningSum);
  }

  let rightBestSum = 0;
  let rightRunningSum = 0;
  for (let i = mid + 1; i <= right; i++) {
    rightRunningSum += nums[i]!;
    rightBestSum = Math.max(rightBestSum, rightRunningSum);
  }

  return leftBestSum + nums[mid]! + rightBestSum;
}

// [left, right]
function solve(nums: number[], left: number, right: number): number {
  if (left === right) {
    return nums[left]!;
  }

  const mid = Math.floor((left + right) / 2);

  const leftMax = solve(nums, left, mid);
  const rightMax = solve(nums, mid + 1, right);
  const crossMax = calculateCrossSum(nums, left, mid, right);

  return Math.max(leftMax, rightMax, crossMax);
}

export default function maxSubArray(nums: number[]): number {
  return solve(nums, 0, nums.length - 1);
}
