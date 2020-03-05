/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function(A) {
  let arr = []
  let k = 0
  let j = 1
  for (let i = 0; i < A.length; i++) {
    if (A[i] %2 === 0) {
      arr[k] = A[i]
      k+=2
    } else {
      arr[j] = A[i]
      j+=2
    }
  }
  return arr
};

console.log(sortArrayByParityII([4,2,5,7]))
