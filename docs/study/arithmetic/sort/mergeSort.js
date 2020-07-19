Array.prototype.mergeSort = function () {
  for (let i = 1; i < this.length; i++) {
    const temp = this[i]
    let j = i
    while (j) {
      if (this[j - 1] > temp) {
        // 向后移动
        this[j] = this[j - 1]
      } else {
        break;
      }
      j -= 1
    }
    // 插入到数组头部
    this[j] = temp
  }
}

let arr = [5,2,4,1,3]
arr.mergeSort()
console.log(arr)
