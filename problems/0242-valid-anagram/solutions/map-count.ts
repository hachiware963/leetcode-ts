export default function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }

  const countMap = new Map<string, number>();

  for (let i = 0; i < s.length; i++) {
    const characterS = s[i]!;
    const characterT = t[i]!;

    countMap.set(characterS, (countMap.get(characterS) ?? 0) + 1);
    countMap.set(characterT, (countMap.get(characterT) ?? 0) - 1);
  }

  for (const count of countMap.values()) {
    if (count !== 0) {
      return false;
    }
  }

  return true;
}
