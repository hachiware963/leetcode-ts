interface Case {
  input: {
    strs: string[];
  };
  expected: string[][];
}

export const testCases: Case[] = [
  {
    input: {
      strs: ["eat", "tea", "tan", "ate", "nat", "bat"],
    },
    expected: [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]],
  },
  {
    input: {
      strs: [""],
    },
    expected: [[""]],
  },
  {
    input: {
      strs: ["a"],
    },
    expected: [["a"]],
  },
];
