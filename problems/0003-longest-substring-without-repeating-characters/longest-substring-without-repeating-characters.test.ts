import { testCases } from "./cases.js";
import bruteForce from "./solutions/brute-force.js";
import slidingWindow from "./solutions/sliding-window.js";
import { describe, expect, it } from "vitest";

const solutions = [
  { name: "brute-force", solve: bruteForce },
  { name: "sliding-window", solve: slidingWindow },
] as const;

describe("3. Longest Substring Without Repeating Characters", () => {
  for (const solution of solutions) {
    describe(solution.name, () => {
      for (const [index, testCase] of testCases.entries()) {
        const caseLabel = `Case ${index + 1}`;

        it(`passes ${caseLabel}`, () => {
          const result = solution.solve(testCase.input.s);
          expect(result).toBe(testCase.expected);
        });
      }
    });
  }
});
