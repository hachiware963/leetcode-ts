export default function threeSum(nums: number[]): number[][] {
  const sorted = Array.from(nums).sort((a, b) => a - b);

  const answer: number[][] = [];

  for (let head = 0; head <= sorted.length - 3; head++) {
    if (head > 0 && sorted[head] === sorted[head - 1]) {
      continue;
    }

    if (sorted[head]! > 0) {
      break;
    }

    let left = head + 1;
    let right = sorted.length - 1;
    const target = -sorted[head]!;

    while (left < right) {
      const sum = sorted[left]! + sorted[right]!;

      if (sum < target) {
        left++;
      } else if (sum > target) {
        right--;
      } else {
        answer.push([sorted[head]!, sorted[left]!, sorted[right]!]);

        while (left < right && sorted[left + 1] === sorted[left]) {
          left++;
        }

        while (left < right && sorted[right - 1] === sorted[right]) {
          right--;
        }

        left++;
        right--;
      }
    }
  }

  return answer;
}
