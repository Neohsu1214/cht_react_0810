/**
 * JS 中的 Class
 * 是用 function 來宣告的
 * field務必使用 this.xxx 宣告
 * method務必使用 anonymous function 方式宣告
 */
function Car() {
    this.speed = 0
    this.getSpeed = function () {
        return this.speed;
    }
}

var myCar = new Car()
console.log(myCar.getSpeed())
myCar.speed = 50
console.log(myCar.getSpeed())

// myCarRun只是 funciton宣告，並非物件，可透過 debugger 查看（但其實做的過程仍有繼承prototype，所以嚴格說起來仍是Class XD）
var myCarRun = function () {
    console.log("super fast")
}
myCarRun()