/**
 * Class 的宣告與繼承用法
 * 子 class 的 constructor 內一定要呼叫 super() 才能存取到 父class 內的東西
 */

class Course {
    constructor() {
        this.duration = 49
    }
    printDuration() {
        console.log(`duration = ${this.duration}`)
    }
}

class ReactCourse extends Course {
    constructor() {
        super() // <- 一定要執行喔！不然會無法存取 parent 的東西
        this.name = 'react'
    }
    printCourse() {
        console.log(`course name = ${this.name}`)
    }
}
const c1 = new ReactCourse()
c1.printCourse()
c1.printDuration() // 子 class 的 constructor 內一定要呼叫 super() 才能存取到 父class 內的東西