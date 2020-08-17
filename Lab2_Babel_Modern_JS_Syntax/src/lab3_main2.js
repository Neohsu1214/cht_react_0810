/**
 * 使用 import * as XXX 來一次載入某個js檔中所有 export 的物件
 * 必須使用 dictionary 存取( ex: XXX.ooo )
 */

 import * as bundled from "./lab3_common_util"

 bundled.default_header()
 console.log(`const MAX_SIZE=${bundled.MAX_SIZE}`)