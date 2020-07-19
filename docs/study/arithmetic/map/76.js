/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  let l = 0,r = 0
  let map = new Map()
  let need = 0
  let res = ''
  for (const tElement of t) {
    map.set(tElement,map.has(tElement) ? map.get(tElement) + 1:1)
  }
  console.log(map)
  need = map.size
  while (r < s.length) {
    const c = s[r]
    if (map.has(c)) {
      map.set(c,map.get(c) - 1)
      if (map.get(c) === 0) {
        need --
      }
    }
    while (need === 0) {
      const newRes = s.substring(l,r+1)
      if (!res || newRes.length < res.length) res = newRes
      const c2 = s[l]
      if (map.has(c2)) {
        map.set(c2,map.get(c2) + 1)
        if (map.get(c2) === 1) need+= 1
      }
      l+=1
    }
    r ++
  }
  return res
};

console.log(minWindow("ADOBECODEBANC","ABC"))
