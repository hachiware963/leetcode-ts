import { testCases } from "./cases.js";
import stackBased from "./solutions/stack-based.js";
import { describe, expect, it } from "vitest";

const solutions = [{ name: "stack-based", solve: stackBased }] as const;

describe("20. Valid Parentheses", () => {
  for (const solution of solutions) {
    describe(solution.name, () => {
      for (const [index, testCase] of testCases.entries()) {
        const caseLabel = `Case ${index + 1}`;

        it(`passes ${caseLabel}`, () => {
          const result = solution.solve(testCase.input);
          expect(result).toBe(testCase.expected);
        });
      }
    });
  }
});
