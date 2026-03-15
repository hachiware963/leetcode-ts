import { testCases } from "./cases.js";
import bruteForce from "./solutions/brute-force.js";
import hashMapTwoPass from "./solutions/hash-map-two-pass.js";
import hashMap from "./solutions/hash-map.js";
import sortTwoPointers from "./solutions/sort-two-pointers.js";
import { describe, expect, it } from "vitest";

const solutions = [
  { name: "brute-force", solve: bruteForce },
  { name: "hash-map-two-pass", solve: hashMapTwoPass },
  { name: "hash-map", solve: hashMap },
  { name: "sort-two-pointers", solve: sortTwoPointers },
] as const;

const normalizePair = (pair: number[]): [number, number] => {
  const sorted = [...pair].sort((a, b) => a - b);
  const first = sorted[0];
  const second = sorted[1];

  if (first === undefined || second === undefined) {
    throw new Error("solution did not return two indexes");
  }

  return [first, second];
};

describe("1. Two Sum", () => {
  for (const solution of solutions) {
    describe(`${solution.name}`, () => {
      for (const [index, testCase] of testCases.entries()) {
        const caseLabel = `Case ${index + 1}`;

        it(`passes ${caseLabel}`, () => {
          const result = solution.solve(
            testCase.input.nums,
            testCase.input.target,
          );
          expect(normalizePair(result)).toEqual(
            normalizePair(testCase.expected),
          );
        });
      }
    });
  }
});
