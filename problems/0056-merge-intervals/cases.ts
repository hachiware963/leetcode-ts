interface Case {
  input: {
    intervals: number[][];
  };
  expected: number[][];
}

export const testCases: Case[] = [
  {
    input: {
      intervals: [
        [1, 3],
        [2, 6],
        [8, 10],
        [15, 18],
      ],
    },
    expected: [
      [1, 6],
      [8, 10],
      [15, 18],
    ],
  },
  {
    input: {
      intervals: [
        [1, 4],
        [4, 5],
      ],
    },
    expected: [[1, 5]],
  },
  {
    input: {
      intervals: [
        [4, 7],
        [1, 4],
      ],
    },
    expected: [[1, 7]],
  },
];
