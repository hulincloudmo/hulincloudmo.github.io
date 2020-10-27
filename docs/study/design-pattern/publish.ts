/**
 * @author 陌上青夏
 * @创建时间 2020/9/28 4:40 下午
 */
// 发布订阅（TypeScript版）
interface Publish {
  registerObserver(eventType : string, subscribe : Subscribe) : void;
  remove(eventType : string, subscribe ?: Subscribe) : void;
  notifyObservers(eventType : string) : void;
}
interface SubscribesObject{
  [key : string] : Array<Subscribe>
}
class ConcretePublish implements Publish {
  _subscribes : SubscribesObject;

  constructor() {
    this._subscribes = {};
  }

  registerObserver(eventType : string, subscribe : Subscribe) : void {
    if (!this._subscribes[eventType]) {
      this._subscribes[eventType] = [];
    }

    this._subscribes[eventType].push(subscribe);
  }

  remove(eventType : string, subscribe ?: Subscribe) : void {
  const subscribeArray = this._subscribes[eventType];
  if (subscribeArray) {
    if (!subscribe) {
      delete this._subscribes[eventType];
    } else {
      for (let i = 0; i < subscribeArray.length; i++) {
        if (subscribe === subscribeArray[i]) {
          subscribeArray.splice(i, 1);
        }
      }
    }
  }
}

notifyObservers(eventType : string, ...args : any[]) : void {
  const subscribes = this._subscribes[eventType];
  if (subscribes) {
    subscribes.forEach(subscribe => subscribe.update(...args))
  }
}
}

interface Subscribe {
  update(...value : any[]) : void;
}

class ConcreteSubscribe1 implements Subscribe {
  public update(...value : any[]) : void {
    console.log('已经执行更新操作1，值为', ...value);
  }
}
class ConcreteSubscribe2 implements Subscribe {
  public update(...value : any[]) : void {
    console.log('已经执行更新操作2，值为', ...value);
  }
}

function main() {
  const publish = new ConcretePublish();
  const subscribe1 = new ConcreteSubscribe1();
  const subscribe2 = new ConcreteSubscribe2();

  publish.registerObserver('1', subscribe1);
  publish.registerObserver('2', subscribe2);

  publish.notifyObservers('2', '22222');
}

main();

