class Car {
  constructor (number, name) {
    this.number = number
    this.name = name
  }

  getNumber () {
    return this.number
  }

  getName () {
    return this.name
  }
  getPrice () {
    return this.price
  }
}

class KuaiChe extends Car {
  constructor (number, name) {
    super(number, name)
    this.price = 2
  }
}

class ZhuanChe extends Car {
  constructor (number, name) {
    super(number, name)
    this.price = 1
  }
}

class Trip {
  constructor (car) {
    this.car = car
    this.long = 5
  }

  start () {
    console.log(`行程开始，车牌信息为${this.car.getNumber()},车辆名为${this.car.getName()}`)
  }
  end () {
    console.log(`行程结束，费用为${this.car.getPrice() * this.long}`)
  }
}
let kuaiche = new KuaiChe("123","hulincloud")
let trip = new Trip(kuaiche)
trip.start()
trip.end()
