export default function findMin(nums: number[]): number {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const rightValue = nums[right]!;

    const mid = left + Math.floor((right - left) / 2);
    const midValue = nums[mid]!;

    if (midValue < rightValue) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }

  return nums[right]!;
}
