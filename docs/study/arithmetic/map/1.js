/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let map = new Map()
  for (let i = 0; i < nums.length; i++) {
    const me = nums[i]
    const lover = target - me
    if (map.has(lover)) {
      return [map.get(lover),i]
    } else {
      map.set(me,i)
    }
  }
};
