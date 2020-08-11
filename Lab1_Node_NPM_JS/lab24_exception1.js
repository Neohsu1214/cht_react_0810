/**
 * JS中的 Exception 處理: throw, try catch 
 */
function oops() {
    throw new Error("Somehting strange happened!")
}
console.log("before oops")
try {
    oops()
} catch (e) {
    console.log("Somehting strange happened!, reason:", e.toString())
}

console.log("after oops") // 這段不會被執行，除非有 try catch 處理 exception