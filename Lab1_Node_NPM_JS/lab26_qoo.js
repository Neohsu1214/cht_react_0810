/**
 * module 可透過 exports 給別的 js 引用後使用
 */
module.exports = {
    qoo: function(data) {
        console.log("[lab26]:qoo")
        console.log(data)
    }
}