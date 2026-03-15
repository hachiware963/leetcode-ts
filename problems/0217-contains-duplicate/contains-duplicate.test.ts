import { testCases } from "./cases.js";
import containsDuplicate from "./solutions/contains-duplicate.js";
import sortContainsDuplicate from "./solutions/sort-contains-duplicate.js";
import { describe, expect, it } from "vitest";

const solutions = [
  { name: "sort-contains-duplicate", solve: sortContainsDuplicate },
  { name: "contains-duplicate", solve: containsDuplicate },
] as const;

describe("217. Contains Duplicate", () => {
  for (const solution of solutions) {
    describe(`${solution.name}`, () => {
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
