function getSubarraySum(nums: number[], start: number, end: number): number {
  let subarraySum = 0;

  for (let i = start; i <= end; i++) {
    subarraySum += nums[i]!;
  }

  return subarraySum;
}

export default function maxSubArray(nums: number[]): number {
  let maxSum = nums[0]!;

  for (let start = 0; start < nums.length; start++) {
    for (let end = start; end < nums.length; end++) {
      const subarraySum = getSubarraySum(nums, start, end);
      maxSum = Math.max(maxSum, subarraySum);
    }
  }

  return maxSum;
}
