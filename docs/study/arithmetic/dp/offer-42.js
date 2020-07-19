/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  const dp = []
  let res = 0
  dp[0] = nums[0]
  for (let i = 1; i < nums.length; i++) {
    dp[i] = nums[i]
    if (dp[i - 1] > 0) {
      dp[i] = dp[i] + dp[i - 1]
    }
    res = Math.max(res,dp[i])
  }
  console.log(dp)
  return res
};
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))
