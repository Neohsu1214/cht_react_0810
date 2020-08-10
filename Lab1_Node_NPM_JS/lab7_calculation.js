console.log(512 * 512)
console.log(512 * 512 * 512 * 512 * 512)
// JS的浮點數問題很大
console.log(0.4 + 0.2) // 0.60000000000000001
console.log(0.4 + 0.3) // 0.7
console.log(0.11 + 0.12 == 0.23) // false
console.log(1 - 0.4 == 0.6) // true
console.log(1 - 0.5 == 0.5) // true
console.log(1 - 0.5 === 0.5) // true
console.log(1 - 0.3 + 0.1 == 0.8) // false
// 由上述問題可以確定，遇到浮點數的處理，盡量別使用javascript做處理，可以考慮先丟給 server 端處理再回傳