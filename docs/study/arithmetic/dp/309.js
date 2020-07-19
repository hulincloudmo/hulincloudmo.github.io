/**
 * @param {number[]} prices
 * @return {number}
 */
let maxProfit = function(prices) {
  let dp = []
  for (let i = 0; i < prices.length; i++) {
    dp[i] = [[0],[1]]
  }
  for (let i = 0; i < prices.length; i++) {
    if (i - 1 === -1) {
      dp[i][0] = 0
      dp[i][1] = -prices[i]
      continue
    }
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i])
    dp[i][1] = Math.max(dp[i - 1][1], -prices[i])
  }
  return dp[prices.length - 1][0]
};

console.log(maxProfit([7,1,5,3,6,4]))
