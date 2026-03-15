export default function groupAnagrams(strs: string[]): string[][] {
  const groupMap = new Map<string, string[]>();

  for (const str of strs) {
    const count = new Array(26).fill(0);

    for (const character of str) {
      count[character.charCodeAt(0) - "a".charCodeAt(0)]++;
    }

    const key = count.join("#");

    if (!groupMap.has(key)) {
      groupMap.set(key, []);
    }

    groupMap.get(key)!.push(str);
  }

  return Array.from(groupMap.values());
}
