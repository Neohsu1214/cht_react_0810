/**
 * NodeJS 中 非同步的例子
 * 以 setTimeout 為例
 */
console.log("Program Start")
setTimeout(() => { console.log("job1 finished") }, 1000)
setTimeout(() => { console.log("job2 finished") }, 5000)
setTimeout(() => { console.log("job3 finished") }, 3000)
console.log("Program Ended")
/*
輸出結果為
Program Start
Program Ended
job1 finished
job3 finished
job2 finished
*/