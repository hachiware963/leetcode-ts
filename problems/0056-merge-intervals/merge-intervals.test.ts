import { testCases } from "./cases.js";
import sortMerge from "./solutions/sort-merge.js";
import sweepEvents from "./solutions/sweep-events.js";
import { describe, expect, it } from "vitest";

const solutions = [
  { name: "sort-merge", solve: sortMerge },
  { name: "sweep-events", solve: sweepEvents },
] as const;

const normalizeIntervals = (intervals: number[][]): number[][] => {
  return [...intervals]
    .map((interval) => [...interval])
    .sort((a, b) => {
      const [startA, endA] = a;
      const [startB, endB] = b;

      if (
        startA === undefined ||
        endA === undefined ||
        startB === undefined ||
        endB === undefined
      ) {
        return 0;
      }

      return startA - startB || endA - endB;
    });
};

describe("56. Merge Intervals", () => {
  for (const solution of solutions) {
    describe(solution.name, () => {
      for (const [index, testCase] of testCases.entries()) {
        const caseLabel = `Case ${index + 1}`;

        it(`passes ${caseLabel}`, () => {
          const result = solution.solve(testCase.input.intervals);
          expect(normalizeIntervals(result)).toEqual(
            normalizeIntervals(testCase.expected),
          );
        });
      }
    });
  }
});
