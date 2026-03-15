export default function groupAnagrams(strs: string[]): string[][] {
  const groupMap = new Map<string, string[]>();

  for (const str of strs) {
    const key = str.split("").sort().join("");

    if (!groupMap.has(key)) {
      groupMap.set(key, []);
    }

    groupMap.get(key)!.push(str);
  }

  return Array.from(groupMap.values());
}
