export default function lengthOfLongestSubstring(s: string): number {
  let maxLength = 0;

  for (let left = 0; left < s.length; left++) {
    const seenCharacters = new Set<string>();

    for (let right = left; right < s.length; right++) {
      const character = s[right]!;

      if (seenCharacters.has(character)) {
        break;
      }

      maxLength = Math.max(maxLength, right - left + 1);
      seenCharacters.add(character);
    }
  }

  return maxLength;
}
