export default function merge(intervals: number[][]): number[][] {
  const sorted = structuredClone(intervals).sort(
    ([startA], [startB]) => startA! - startB!,
  );

  const answer: number[][] = [];
  answer.push([...sorted[0]!]);

  for (let i = 1; i < sorted.length; i++) {
    const current = sorted[i]!;
    const last = answer[answer.length - 1]!;

    if (current[0]! <= last[1]!) {
      last[1] = Math.max(last[1]!, current[1]!);
    } else {
      answer.push(current);
    }
  }

  return answer;
}
