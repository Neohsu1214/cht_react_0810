/**
 * JS 中 宣告 Class 的另二種方法
 * 以 JS Object 方式宣告一個 Class Object
 * 並探討method中 this 的有效性議題
 */

var car2 = {
    speed: 0,
    getSpeed: function () {
        console.log(this.speed)
    },
    getSpeed2: function () {
        setTimeout(function () { 
            console.log('catch this in async...fail')
            console.log(this.speed) 
        }, 1000)
    },
    getSpeed3: function() {
        var that = this
        setTimeout(function () { 
            console.log('use that to cache this')
            console.log(that.speed) 
        }, 1000)
    },
    getSpeed4: function() {
        setTimeout(() => {
            console.log('now using arrow function to solve cache issue')
            console.log(this.speed)
        }, 1000)
    }
}
car2.speed = 888
car2.getSpeed();
car2.getSpeed2(); // 竟然會說 getSpeed2() 是 undefined?! 因為 car2 在 timeout 之後就不見了
car2.getSpeed3(); // 在method 中改用另一個變數接(that)取後存取，就解掉上述問題囉！
car2.getSpeed4(); // arrow function 會自動解掉 2的問題，不需要再另外宣告 that!