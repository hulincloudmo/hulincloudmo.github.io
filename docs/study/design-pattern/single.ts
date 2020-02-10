class Single {
  private static instance = new Single()

  // 私有构造方法
  private constructor() {

  }

  static getInstance() {
    return this.instance
  }
}

let a = Single.getInstance()
let b = Single.getInstance()
console.log(a===b)  // true
// let c= new Single()  Typescript语法提示不能使用new来获得实例
