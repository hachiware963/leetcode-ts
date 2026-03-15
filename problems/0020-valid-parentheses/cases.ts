interface Case {
  input: {
    s: string;
  };
  expected: boolean;
}

export const testCases: Case[] = [
  {
    input: {
      s: "()",
    },
    expected: true,
  },
  {
    input: {
      s: "()[]{}",
    },
    expected: true,
  },
  {
    input: {
      s: "(]",
    },
    expected: false,
  },
  {
    input: {
      s: "([])",
    },
    expected: true,
  },
  {
    input: {
      s: "([)]",
    },
    expected: false,
  },
];
