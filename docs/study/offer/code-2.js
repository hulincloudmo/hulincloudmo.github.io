var CarPark = /** @class */ (function () {
    function CarPark(storeys) {
        this.storeys = storeys;
        this._computedCount();
    }
    CarPark.prototype.preview = function (storeyNum) {
        console.log("\u8F66\u8F86\u8FDB\u5165\u524D\uFF0C\u8F66\u4F4D\u5269\u4F59" + this.AllCount);
    };
    CarPark.prototype.join = function (car) {
        console.log("\u8F66\u8F86\u8FDB\u5165\u505C\u8F66\u573A\uFF0C\u8F66\u724C\u53F7\u4E3A" + car.getNumber() + ",\u65F6\u95F4\u4E3A" + car.getTime());
        this.AllCount -= 1;
    };
    CarPark.prototype.leave = function (car) {
        console.log("\u8F66\u8F86\u79BB\u5F00\u505C\u8F66\u573A\uFF0C\u8F66\u724C\u53F7\u4E3A" + car.getNumber() + ",\u65F6\u95F4\u4E3A" + (new Date().getTime() - car.getTime()));
        this.AllCount += 1;
    };
    CarPark.prototype.getStoreys = function () {
        return this.storeys;
    };
    CarPark.prototype._computedCount = function () {
        var count = 0;
        this.storeys.forEach(function (v) {
            count += v.getCount();
        });
        this.AllCount = count;
    };
    return CarPark;
}());
var Storey = /** @class */ (function () {
    function Storey(count) {
        this.count = count;
        this.spaceGroup = Storey._createSpace(count);
    }
    Storey.prototype.getCount = function () {
        return this.count;
    };
    Storey.prototype._getVacantSpace = function () {
        return this.spaceGroup.filter(function (v) { return v.getStatus() === false; }).length;
    };
    Storey._createSpace = function (count) {
        var spaceArr = [];
        while (count--) {
            var space = new PackingSpace(false);
            spaceArr.push(space);
        }
        return spaceArr;
    };
    Storey.prototype.getSpaceGroup = function () {
        return this.spaceGroup;
    };
    return Storey;
}());
var PackingSpace = /** @class */ (function () {
    function PackingSpace(type) {
        this.status = type;
    }
    PackingSpace.prototype.getStatus = function () {
        return this.status;
    };
    PackingSpace.prototype.enter = function (car) {
        console.log("\u8F66\u8F86\u8FDB\u5165\u505C\u8F66\u4F4D");
        this.car = car;
        this.status = !this.status;
    };
    PackingSpace.prototype.leave = function () {
        console.log("\u8F66\u8F86\u79BB\u5F00\u505C\u8F66\u4F4D");
        this.car = null;
        this.status = !this.status;
    };
    return PackingSpace;
}());
var Car = /** @class */ (function () {
    function Car(number) {
        this.number = number;
        this.time = new Date().getTime();
    }
    Car.prototype.getTime = function () {
        return this.time;
    };
    Car.prototype.getNumber = function () {
        return this.number;
    };
    return Car;
}());
var storey = new Storey(100);
var storey1 = new Storey(100);
var arr = [];
arr.push(storey);
arr.push(storey1);
var park = new CarPark(arr);
var car = new Car(1001);
park.preview(0);
park.join(car);
var car1 = new Car(1002);
park.preview(0);
park.join(car1);
park.getStoreys()[0].getSpaceGroup()[0].enter(car);
setTimeout(function () {
    park.getStoreys()[0].getSpaceGroup()[0].leave();
    park.leave(car);
}, 5000);
