interface Case {
  input: {
    nums: number[];
  };
  expected: number;
}

export const testCases: Case[] = [
  {
    input: {
      nums: [3, 4, 5, 1, 2],
    },
    expected: 1,
  },
  {
    input: {
      nums: [4, 5, 6, 7, 0, 1, 2],
    },
    expected: 0,
  },
  {
    input: {
      nums: [11, 13, 15, 17],
    },
    expected: 11,
  },
];
