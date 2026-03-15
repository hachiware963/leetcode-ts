import { testCases } from "./cases.js";
import sortValidAnagram from "./solutions/sort-valid-anagram.js";
import mapCount from "./solutions/map-count.js";
import arrayCount from "./solutions/array-count.js";
import { describe, expect, it } from "vitest";

const solutions = [
  { name: "sort-valid-anagram", solve: sortValidAnagram },
  { name: "map-count", solve: mapCount },
  { name: "array-count", solve: arrayCount },
] as const;

describe("242. Valid Anagram", () => {
  for (const solution of solutions) {
    describe(solution.name, () => {
      for (const [index, testCase] of testCases.entries()) {
        const caseLabel = `Case ${index + 1}`;

        it(`passes ${caseLabel}`, () => {
          const result = solution.solve(
            testCase.input.s,
            testCase.input.t,
          );
          expect(result).toBe(testCase.expected);
        });
      }
    });
  }
});
