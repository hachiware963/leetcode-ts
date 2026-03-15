import { testCases } from "./cases.js";
import bruteForce from "./solutions/brute-force.js";
import onePassMinPrice from "./solutions/one-pass-min-price.js";
import { describe, expect, it } from "vitest";

const solutions = [
  { name: "brute-force", solve: bruteForce },
  { name: "one-pass-min-price", solve: onePassMinPrice },
] as const;

describe("121. Best Time to Buy and Sell Stock", () => {
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
