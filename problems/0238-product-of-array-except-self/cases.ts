interface Case {
  input: {
    nums: number[];
  };
  expected: number[];
}

export const testCases: Case[] = [
  {
    input: {
      nums: [1, 2, 3, 4],
    },
    expected: [24, 12, 8, 6],
  },
  {
    input: {
      nums: [-1, 1, 0, -3, 3],
    },
    expected: [0, 0, 9, 0, 0],
  },
];
