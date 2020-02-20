const data = {}

let name = '陌上青夏'

Object.defineProperty(data,'name', {
  get: function () {
    console.log('get')
    return name
  },
  set: function (newVal)  {
    console.log('set')
    name = newVal
  }
})

console.log(data.name)
data.name = 'msqx'

// get
// 陌上青夏
// set
