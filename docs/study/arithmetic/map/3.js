/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  let map = new Map()
  let res = 0
  let l = 0
  for (let r = 0; r < s.length; r++) {
    if (map.has(s[r]) && map.get(s[r] >= l)) {
      l = map.get(s[r]) + 1
    }
    res = Math.max(res,r - l + 1)
    map.set(s[r],r)
  }
  return res
};

console.log(lengthOfLongestSubstring("abcabcbb"))
