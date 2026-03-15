import { testCases } from "./cases.js";
import hashSet from "./solutions/hash-set.js";
import sortTwoPointers from "./solutions/sort-two-pointers.js";
import { describe, expect, it } from "vitest";

const solutions = [
  { name: "sort-two-pointers", solve: sortTwoPointers },
  { name: "hash-set", solve: hashSet },
] as const;

const normalizeTriplets = (triplets: number[][]): number[][] => {
  const normalizeNumber = (value: number): number =>
    Object.is(value, -0) ? 0 : value;

  return triplets
    .map((triplet) =>
      [...triplet].map((value) => normalizeNumber(value)).sort((a, b) => a - b),
    )
    .sort((a, b) => a[0]! - b[0]! || a[1]! - b[1]! || a[2]! - b[2]!);
};

describe("15. 3Sum", () => {
  for (const solution of solutions) {
    describe(solution.name, () => {
      for (const [index, testCase] of testCases.entries()) {
        const caseLabel = `Case ${index + 1}`;

        it(`passes ${caseLabel}`, () => {
          const result = solution.solve(testCase.input.nums);
          expect(normalizeTriplets(result)).toEqual(
            normalizeTriplets(testCase.expected),
          );
        });
      }
    });
  }
});
