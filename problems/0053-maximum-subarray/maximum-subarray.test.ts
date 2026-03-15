import { testCases } from "./cases.js";
import bruteForce from "./solutions/brute-force.js";
import divideAndConquer from "./solutions/divide-and-conquer.js";
import kadane from "./solutions/kadane.js";
import prefixSum from "./solutions/prefix-sum.js";
import { describe, expect, it } from "vitest";

const solutions = [
  { name: "brute-force", solve: bruteForce },
  { name: "prefix-sum", solve: prefixSum },
  { name: "kadane", solve: kadane },
  { name: "divide-and-conquer", solve: divideAndConquer },
] as const;

describe("53. Maximum Subarray", () => {
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
