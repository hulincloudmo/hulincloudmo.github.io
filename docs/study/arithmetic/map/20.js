/**
 * @param {string} s
 * @return {boolean}
 */
let isValid = function(s) {
  let stack = []
  if(s.length % 2) return false
  const map = new Map()
  map.set("(",')')
  map.set("{",'}')
  map.set("[",']')
  for(let cha of s) {
    if (map.has(cha)) {
      stack.push(cha)
    } else {
      let t = stack[stack.length - 1]
      if (map.get(t) === cha) {
        stack.pop()
      } else {
        return false
      }
    }
  }
  return !stack.length
};

console.log(isValid("([)]"))
