interface Case {
  input: string;
  expected: number;
}

export const testCases: Case[] = [
  {
    input: "abcabcbb",
    expected: 3,
  },
  {
    input: "bbbbb",
    expected: 1,
  },
  {
    input: "pwwkew",
    expected: 3,
  },
];
