export default function threeSum(nums: number[]): number[][] {
  const answer: number[][] = [];
  const uniqueTriplets = new Set<string>();
  const usedFirstNums = new Set<number>();

  for (let i = 0; i < nums.length; i++) {
    const firstNum = nums[i]!;

    if (usedFirstNums.has(firstNum)) {
      continue;
    }
    usedFirstNums.add(firstNum);

    const target = -firstNum;
    const previousNums = new Set<number>();

    for (let j = i + 1; j < nums.length; j++) {
      const current = nums[j]!;
      const complement = target - current;

      if (previousNums.has(complement)) {
        const triplet = [firstNum, current, complement].sort((a, b) => a - b);
        const tripletString = triplet.join(",");

        if (!uniqueTriplets.has(tripletString)) {
          answer.push(triplet);
          uniqueTriplets.add(tripletString);
        }
      }

      previousNums.add(current);
    }
  }

  return answer;
}
