/**
 * @author 陌上青夏
 * @创建时间 2020/7/22 2:33 下午
 */
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
  let index = 0
  g.sort((a,b) => a - b)
  s.sort((a,b) => a - b)
  s.forEach(n => {
    if (n>=g[index]) {
      index += 1
    }
  })
  return index
};
