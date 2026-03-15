interface Case {
  input: string;
  expected: boolean;
}

export const testCases: Case[] = [
  {
    input: "()",
    expected: true,
  },
  {
    input: "()[]{}",
    expected: true,
  },
  {
    input: "(]",
    expected: false,
  },
  {
    input: "([])",
    expected: true,
  },
  {
    input: "([)]",
    expected: false,
  },
];
