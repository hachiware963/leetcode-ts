import { testCases } from "./cases.js";
import array26Count from "./solutions/array26-count.js";
import mapCount from "./solutions/map-count.js";
import sortedString from "./solutions/sorted-string.js";
import { describe, expect, it } from "vitest";

const solutions = [
  { name: "sorted-string", solve: sortedString },
  { name: "map-count", solve: mapCount },
  { name: "array26-count", solve: array26Count },
] as const;

const normalizeGroups = (groups: string[][]): string[][] => {
  return groups
    .map((group) => [...group].sort())
    .sort((a, b) => {
      const keyA = a.join("|");
      const keyB = b.join("|");
      return keyA < keyB ? -1 : keyA > keyB ? 1 : 0;
    });
};

describe("49. Group Anagrams", () => {
  for (const solution of solutions) {
    describe(solution.name, () => {
      for (const [index, testCase] of testCases.entries()) {
        const caseLabel = `Case ${index + 1}`;

        it(`passes ${caseLabel}`, () => {
          const result = solution.solve(testCase.input);
          expect(normalizeGroups(result)).toEqual(
            normalizeGroups(testCase.expected),
          );
        });
      }
    });
  }
});
