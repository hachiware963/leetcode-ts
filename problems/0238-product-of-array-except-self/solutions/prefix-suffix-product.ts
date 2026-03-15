export default function productExceptSelf(nums: number[]): number[] {
  const prefix: number[] = new Array(nums.length);
  prefix[0] = 1;
  for (let i = 1; i < prefix.length; i++) {
    prefix[i] = prefix[i - 1]! * nums[i - 1]!;
  }

  const suffix: number[] = new Array(nums.length);
  suffix[suffix.length - 1] = 1;
  for (let i = suffix.length - 2; i >= 0; i--) {
    suffix[i] = suffix[i + 1]! * nums[i + 1]!;
  }

  return new Array(nums.length)
    .fill(0)
    .map((_value, index) => prefix[index]! * suffix[index]!);
}
