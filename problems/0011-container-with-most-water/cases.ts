interface Case {
  input: {
    height: number[];
  };
  expected: number;
}

export const testCases: Case[] = [
  {
    input: {
      height: [1, 8, 6, 2, 5, 4, 8, 3, 7],
    },
    expected: 49,
  },
  {
    input: {
      height: [1, 1],
    },
    expected: 1,
  },
];
