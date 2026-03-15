interface Case {
  input: {
    prices: number[];
  };
  expected: number;
}

export const testCases: Case[] = [
  {
    input: {
      prices: [7, 1, 5, 3, 6, 4],
    },
    expected: 5,
  },
  {
    input: {
      prices: [7, 6, 4, 3, 1],
    },
    expected: 0,
  },
];
