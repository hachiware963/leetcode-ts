export default function productExceptSelf(nums: number[]): number[] {
  const answer: number[] = new Array(nums.length);
  answer[answer.length - 1] = 1;

  for (let i = answer.length - 2; i >= 0; i--) {
    answer[i] = answer[i + 1]! * nums[i + 1]!;
  }

  let prefix = 1;

  for (let i = 0; i < answer.length; i++) {
    answer[i] = prefix * answer[i]!;
    prefix *= nums[i]!;
  }

  return answer;
}
