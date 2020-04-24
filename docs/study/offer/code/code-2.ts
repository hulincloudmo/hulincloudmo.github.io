// 停车场
class CarPark {
  private readonly storeys:Array<Storey>
  private AllCount: number | undefined
  private _storeyNum: any
  constructor(storeys: Storey[]) {
    this.storeys = storeys
    this._computedCount()
  }
  preview(storeyNum: number) {
    this._storeyNum = storeyNum
    console.log(`车辆进入前，车位剩余${this.AllCount}`)
  }

  join(car: Car) {
    console.log(`车辆进入停车场，车牌号为${car.getNumber()},时间为${car.getTime()}`)
    // @ts-ignore
    this.AllCount-=1

  }
  leave(car: Car) {
    console.log(`车辆离开停车场，车牌号为${car.getNumber()},时间为${new Date().getTime()-car.getTime()}`)
    // @ts-ignore
    this.AllCount+=1
  }

  getStoreys() {
    return this.storeys
  }

  private _computedCount() {
    let count = 0
    this.storeys.forEach(v=> {
      count+= v.getCount()
    })
    this.AllCount = count
  }
}
// 停车场中的一层
class Storey {
  private readonly count: number
  private readonly spaceGroup: Array<PackingSpace>
  constructor(count:number) {
    this.count = count
    this.spaceGroup = Storey._createSpace(count)
  }

  getCount() {
    return this.count
  }

  _getVacantSpace() {
    return this.spaceGroup.filter(v=>v.getStatus() === false).length
  }

  private static _createSpace(count: number):Array<PackingSpace> {
    let spaceArr = []
    while(count--) {
      let space = new PackingSpace(false)
      spaceArr.push(space)
    }
    return spaceArr
  }
  getSpaceGroup() {
    return this.spaceGroup
  }
}
// 每个停车位
class PackingSpace {
  private status: boolean
  private car: Car | undefined;
  constructor(type: boolean) {
    this.status = type
  }

  getStatus() {
    return this.status
  }

  enter(car: Car | undefined) {
    console.log(`车辆进入停车位`)
    this.car = car
    this.status = !this.status
  }

  leave() {
    console.log(`车辆离开停车位`)
    // @ts-ignore
    this.car = null
    this.status = !this.status
  }

}

class Screens {

}

class Camera {

}
// 汽车
class Car {
  private readonly time: number
  private readonly number: number
  constructor(number: number) {
    this.number = number
    this.time = new Date().getTime()
  }
  getTime() {
    return this.time
  }
  getNumber() {
    return this.number
  }
}


// 测试代码
let storey = new Storey(100)
let storey1 = new Storey(100)
let arr = []
arr.push(storey)
arr.push(storey1)
let park = new CarPark(arr)
let car = new Car(1001)
park.preview(0)
park.join(car)
let car1 = new Car(1002)
park.preview(0)
park.join(car1)
park.getStoreys()[0].getSpaceGroup()[0].enter(car)
setTimeout(()=> {
  park.getStoreys()[0].getSpaceGroup()[0].leave()
  park.leave(car)
},5000)
