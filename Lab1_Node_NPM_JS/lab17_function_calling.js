/**
 * JS的function參數原則
 * 
 */

function echoMe(name) {
    console.log("echo " + name)
}

echoMe("Mark")
echoMe()
echoMe('a', 'b')
echoMe(['a', 'b'])
var a1 = ['a', 'b']
echoMe(a1)

// arguments 是預設變數 array，可以直接取用
function mySum() {
    var sum = 0
    for (i = 0; i < arguments.length; i++) {
        sum += arguments[i]
    }
    return sum
}
console.log(mySum())
console.log(mySum(1, 2, 3))
console.log(mySum('a', 'b', 'c'))