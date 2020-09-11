/**
 * @author 陌上青夏
 * @创建时间 2020/7/22 9:11 下午
 */
/**
 * @param {number[]} numbers
 * @return {number}
 */
let minArray = function(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > numbers[i + 1]) {
      return numbers[i + 1]
    }
  }
  return numbers[0]
};

console.log(minArray([2,2,2,0,1]))
