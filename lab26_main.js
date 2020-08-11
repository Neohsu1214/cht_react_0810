/**
 * 透過 require 引用外部 module 內容
 */
var lab26_qoo = require('./lab26_qoo')
var lab26_foo = require('./lab26_foo')

lab26_qoo.qoo("HiHiHi")
lab26_foo.ooo("hoho")
console.log(lab26_foo.status)