/**
 * JS中Boolean值為false的物件比較
 */

var negatives = [undefined, false, 0, null, NaN, ""] // JS中絕對是false的物件大集合 XD

for (i = 0; i < negatives.length; i++) {
    for (j = i + 1; j < negatives.length; j++) {
        console.log(negatives[i], '==', negatives[j], negatives[i] == negatives[j])
    }
}
console.log('------------------ 用『==』的有些是true，用『===』後全都是false ------------------')

for (i = 0; i < negatives.length; i++) {
    for (j = i + 1; j < negatives.length; j++) {
        console.log(negatives[i], '===', negatives[j], negatives[i] === negatives[j])
    }
}