
@changeClassDecorator()
class Decorator {
  constructor () {
    console.log(111)
  }

  test () {
    console.log('test')
  }
}

function changeClassDecorator () {
  return function (target:any) {
    target.prototype.say = () => {
      console.log('hello')
    }
  }
}

// @ts-ignore
new Decorator().say() // hello
