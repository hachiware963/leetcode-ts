interface Case {
  input: number[];
  expected: number;
}

export const testCases: Case[] = [
  {
    input: [-2, 1, -3, 4, -1, 2, 1, -5, 4],
    expected: 6,
  },
  {
    input: [1],
    expected: 1,
  },
  {
    input: [5, 4, -1, 7, 8],
    expected: 23,
  },
];
