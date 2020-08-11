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
