var intersection = function(nums1, nums2) {
  const map = new Map()
  const res = []
 nums1.forEach(n=> map.set(n,true))
  nums2.forEach(n=> {
    if (map.get(n)) {
      res.push(n)
      map.delete(n)
    }
  })
  return res
};
