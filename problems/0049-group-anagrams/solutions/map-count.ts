export default function groupAnagrams(strs: string[]): string[][] {
  const groupMap = new Map<string, string[]>();

  for (const str of strs) {
    const countMap = new Map<string, number>();

    for (const character of str) {
      countMap.set(character, (countMap.get(character) ?? 0) + 1);
    }

    const key = Array.from(countMap.entries())
      .sort(([keyA], [keyB]) => keyA.localeCompare(keyB))
      .map(([key, value]) => `${key}:${value}`)
      .join("#");

    if (!groupMap.has(key)) {
      groupMap.set(key, []);
    }

    groupMap.get(key)!.push(str);
  }

  return Array.from(groupMap.values());
}
