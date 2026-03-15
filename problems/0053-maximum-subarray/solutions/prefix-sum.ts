export default function maxSubArray(nums: number[]): number {
  let maxSum = nums[0]!;

  for (let start = 0; start < nums.length; start++) {
    let subarraySum = 0;

    for (let end = start; end < nums.length; end++) {
      subarraySum += nums[end]!;
      maxSum = Math.max(maxSum, subarraySum);
    }
  }

  return maxSum;
}
