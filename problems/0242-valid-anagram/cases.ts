interface Case {
  input: {
    s: string;
    t: string;
  };
  expected: boolean;
}

export const testCases: Case[] = [
  {
    input: { s: "anagram", t: "nagaram" },
    expected: true,
  },
  {
    input: { s: "rat", t: "car" },
    expected: false,
  },
];
