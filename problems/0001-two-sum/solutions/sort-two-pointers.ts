export default function twoSum(nums: number[], target: number): number[] {
  const sorted = nums
    .map((num, index) => ({ num, index }))
    .sort((a, b) => a.num - b.num);

  let left = 0;
  let right = sorted.length - 1;

  while (left < right) {
    const sortedLeft = sorted[left]!;
    const sortedRight = sorted[right]!;
    const sum = sortedLeft.num + sortedRight.num;

    if (sum < target) {
      left++;
    } else if (sum > target) {
      right--;
    } else {
      return [sortedLeft.index, sortedRight.index];
    }
  }

  throw new Error("unreachable");
}
