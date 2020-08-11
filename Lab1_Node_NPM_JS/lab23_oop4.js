/**
 * JS 中 宣告 Class 的另一種方法（舊版node不一定能執行）
 * 此為 ES6 的宣告方法
 * 可在 Chrome外掛 Scratch JS 上將ES6語法貼上，可以看到compile之後的語法
 */
class Car {
    constructor() {
        this.speed = 0
    }
}

var car1 = new Car()
console.log(car1.speed)
car1.speed = 50
console.log(car1.speed)