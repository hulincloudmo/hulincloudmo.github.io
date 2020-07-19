/**
 * @param {string} s
 * @return {boolean}
 */
let isValid = function(s) {
  let stack = []
  if(s.length % 2) return false
  for(let cha of s) {
    if (cha === "{" || cha === "[" || cha === "(") {
      stack.push(cha)
    } else if (cha === "}" || cha === "]" || cha === ")") {
      let element = stack.pop()
      switch (cha) {
        case ')': {
          if (element !== "(") {
            return false
          }
          break
        }
        case ']': {
          if (element !== "[") {
            return false
          }
          break
        }
        case '}': {
          if (element !== "{") {
            return false
          }
          break
        }
      }
    }
  }
  return !stack.length
};

console.log(isValid("([)]"))
