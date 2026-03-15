export default function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]!;
    map.set(num, i);
  }

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]!;
    const complement = target - num;
    const complementIndex = map.get(complement);

    if (complementIndex !== undefined && complementIndex !== i) {
      return [complementIndex, i];
    }
  }

  throw new Error("unreachable");
}
