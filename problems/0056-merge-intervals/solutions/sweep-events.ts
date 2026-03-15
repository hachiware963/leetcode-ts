export default function merge(intervals: number[][]): number[][] {
  const events: [number, "START" | "END"][] = [];

  intervals.forEach(([start, end]) => {
    events.push([start!, "START"]);
    events.push([end!, "END"]);
  });

  events.sort(([timeA, typeA], [timeB, typeB]) => {
    if (timeA !== timeB) {
      return timeA - timeB;
    }

    if (typeA === typeB) {
      return 0;
    }

    return typeA === "START" ? -1 : 1;
  });

  const answer: number[][] = [];
  let count = 0;
  let start: number | null = null;

  events.forEach(([time, type]) => {
    if (type === "START") {
      if (start === null) {
        start = time;
      }

      count++;
    } else {
      count--;

      if (count === 0 && start !== null) {
        answer.push([start, time]);
        start = null;
      }
    }
  });

  return answer;
}
