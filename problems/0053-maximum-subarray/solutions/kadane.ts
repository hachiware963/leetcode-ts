export default function maxSubArray(nums: number[]): number {
  let maxSum = nums[0]!;
  let maxEndingHere = nums[0]!;

  for (let i = 1; i < nums.length; i++) {
    maxEndingHere = Math.max(nums[i]! + maxEndingHere, nums[i]!);
    maxSum = Math.max(maxSum, maxEndingHere);
  }

  return maxSum;
}
