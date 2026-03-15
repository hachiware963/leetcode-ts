import { testCases } from "./cases.js";
import twoPointers from "./solutions/two-pointers.js";
import { describe, expect, it } from "vitest";

const solutions = [{ name: "two-pointers", solve: twoPointers }] as const;

describe("11. Container With Most Water", () => {
  for (const solution of solutions) {
    describe(solution.name, () => {
      for (const [index, testCase] of testCases.entries()) {
        const caseLabel = `Case ${index + 1}`;

        it(`passes ${caseLabel}`, () => {
          const result = solution.solve(testCase.input.height);
          expect(result).toBe(testCase.expected);
        });
      }
    });
  }
});
