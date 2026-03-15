export default function maxProfit(prices: number[]): number {
  let max = 0;

  for (let start = 0; start < prices.length; start++) {
    for (let end = start + 1; end < prices.length; end++) {
      max = Math.max(max, prices[end]! - prices[start]!);
    }
  }

  return max;
}
