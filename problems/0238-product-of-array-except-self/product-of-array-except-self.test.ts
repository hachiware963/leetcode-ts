import { testCases } from "./cases.js";
import inPlacePass from "./solutions/in-place-pass.js";
import prefixSuffixProduct from "./solutions/prefix-suffix-product.js";
import { describe, expect, it } from "vitest";

const solutions = [
  { name: "prefix-suffix-product", solve: prefixSuffixProduct },
  { name: "in-place-pass", solve: inPlacePass },
] as const;

const normalizeNumber = (value: number): number =>
  Object.is(value, -0) ? 0 : value;

const normalizeArray = (values: number[]): number[] =>
  values.map((value) => normalizeNumber(value));

describe("238. Product of Array Except Self", () => {
  for (const solution of solutions) {
    describe(solution.name, () => {
      for (const [index, testCase] of testCases.entries()) {
        const caseLabel = `Case ${index + 1}`;

        it(`passes ${caseLabel}`, () => {
          const result = solution.solve(testCase.input.nums);
          expect(normalizeArray(result)).toEqual(
            normalizeArray(testCase.expected),
          );
        });
      }
    });
  }
});
