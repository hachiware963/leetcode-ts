export default function lengthOfLongestSubstring(s: string): number {
  let maxLength = 0;
  let left = 0;
  let right = 0;
  const seenCharacters = new Set<string>();

  while (right < s.length) {
    const rightCharacter = s[right]!;

    while (seenCharacters.has(rightCharacter)) {
      const leftCharacter = s[left]!;
      seenCharacters.delete(leftCharacter);
      left++;
    }

    maxLength = Math.max(maxLength, right - left + 1);
    seenCharacters.add(rightCharacter);
    right++;
  }

  return maxLength;
}
