const { exception } = require("console");

/**
 * 在非同步處理的情況下，是無法直接 catch 住 exception 的
 * 所以要額外寫 handler 來處理，例如在 callback 中去 try catch
 */
try {
    //throw new Error("haha") // Sync: 可被正常 catch 到！
    //setTimeout(() => { throw new Error("haha") }, 200) // Async: 無法被catch到而報錯！
    setTimeout(() => {
        try {
            throw new Error("HAHA!!")
        } catch (e) {
            console.log("got an error in setTimeout:" + e.toString())
        }
        console.log("Do something else")
    }, 200)
} catch (e) {
    console.log("got an error:" + e.toString())
}
console.log("program terminated!")