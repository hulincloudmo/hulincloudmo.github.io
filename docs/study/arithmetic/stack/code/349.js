/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  const res = []
  nums1 = [...new Set(nums1)]
  for (let number of nums1) {
    if (nums2.includes(number)) {
      res.push(number)
    }
  }
  return res
};
