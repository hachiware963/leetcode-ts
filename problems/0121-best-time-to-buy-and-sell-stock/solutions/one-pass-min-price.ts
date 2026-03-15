export default function maxProfit(prices: number[]): number {
  let max = 0;
  let minPrice = prices[0]!;

  for (let current = 1; current < prices.length; current++) {
    const currentPrice = prices[current]!;

    if (currentPrice > minPrice) {
      max = Math.max(max, currentPrice - minPrice);
    } else {
      minPrice = currentPrice;
    }
  }

  return max;
}
