/**
 * let 對於 scope 比 var 嚴謹
 * ES建議大家盡量使用 let 取代 var
 */

function var_test1() {
    console.log('1 x=', x) // var 較不嚴謹，在宣告前使用頂多是 undefined...
    var x = 100
    console.log('2 x=', x)

    if (true) {
        var x = 200
        console.log('3 x=', x)
    }
    console.log('4 x=', x)
}

function let_test1() {
    //console.log('1 y=', y) // let 較嚴謹，所以在宣告前就使用會有Exception！
    let y = 100
    console.log('2 y=', y)

    if (true) {
        let y = 200 // 在 if 內的 let宣告變數，只有在 if 內有效
        console.log('3 y=', y)
    }
    console.log('4 y=', y)
}

var_test1()
let_test1()