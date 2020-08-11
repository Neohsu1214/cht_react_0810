/**
 * JS 中的 Class 與 事後異動Class內容的方法( ex: 加入新的fields/methods)
 * 使用 prototype
 * prototype 為Class的parent，所以一但將field/method加入 prototype，會讓繼承自 prototype 的物件都跟著有
 */
function Car() {
//    this.speed = 0
    this.getSpeed = function () {
        return this.speed;
    }
}
Car.prototype.speed = 0
Car.prototype.getSpeed = function () {
    return Car.prototype.speed
}
Car.prototype.setSpeed = function (speed) {
    Car.prototype.speed = speed
}

var myCar = new Car()
console.log(myCar.getSpeed())
//myCar.speed = 50
myCar.setSpeed(60)
console.log(myCar.getSpeed())
