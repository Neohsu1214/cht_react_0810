/**
 * JS 中的 Class 繼承方法
 * 使用 prototype 指定要繼承的 parent 物件
 */
function Car() {
//    this.speed = 0
    this.getSpeed = function () {
        return this.speed;
    }
}
Car.prototype.speed = 0
Car.prototype.limit = 9999
Car.prototype.getSpeed = function () {
    return Car.prototype.speed
}
Car.prototype.setSpeed = function (speed) {
    Car.prototype.speed = speed
}

// JS 中的 Class 繼承方法: prototype
function HybridCar() {

}
HybridCar.prototype = new Car()
HybridCar.prototype.__proto__ = Car.prototype
HybridCar.prototype.batteryLimit = 5000

var myCar = new HybridCar()
console.log(myCar.getSpeed())
//myCar.speed = 50
myCar.setSpeed(60)
console.log(myCar.getSpeed())
console.log(myCar.batteryLimit)
console.log(myCar.limit)