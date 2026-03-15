interface Case {
  input: string[];
  expected: string[][];
}

export const testCases: Case[] = [
  {
    input: ["eat", "tea", "tan", "ate", "nat", "bat"],
    expected: [["bat"], ["nat", "tan"], ["ate", "eat", "tea"]],
  },
  {
    input: [""],
    expected: [[""]],
  },
  {
    input: ["a"],
    expected: [["a"]],
  },
];
