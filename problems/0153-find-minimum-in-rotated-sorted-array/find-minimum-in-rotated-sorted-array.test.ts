import { testCases } from "./cases.js";
import binarySearch from "./solutions/binary-search.js";
import { describe, expect, it } from "vitest";

const solutions = [{ name: "binary-search", solve: binarySearch }] as const;

describe("153. Find Minimum in Rotated Sorted Array", () => {
  for (const solution of solutions) {
    describe(solution.name, () => {
      for (const [index, testCase] of testCases.entries()) {
        const caseLabel = `Case ${index + 1}`;

        it(`passes ${caseLabel}`, () => {
          const result = solution.solve(testCase.input.nums);
          expect(result).toBe(testCase.expected);
        });
      }
    });
  }
});
