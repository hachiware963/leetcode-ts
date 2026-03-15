export default function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) {
    return false;
  }

  const countList = new Array(26).fill(0);

  for (let i = 0; i < s.length; i++) {
    const sIndex = s[i]!.charCodeAt(0) - "a".charCodeAt(0);
    const tIndex = t[i]!.charCodeAt(0) - "a".charCodeAt(0);

    countList[sIndex]++;
    countList[tIndex]--;
  }

  for (const count of countList) {
    if (count !== 0) {
      return false;
    }
  }

  return true;
}
