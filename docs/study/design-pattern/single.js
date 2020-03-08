var Single = /** @class */ (function () {
    function Single() {
    }
    Single.getInstance = function () {
        return this.instance;
    };
    Single.instance = new Single();
    return Single;
}());
var a = Single.getInstance();
var b = Single.getInstance();
console.log(a === b); // true
// let c= new Single()  通过Typescript限制new
