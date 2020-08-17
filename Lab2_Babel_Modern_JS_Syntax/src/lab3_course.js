/**
 * 定義一個可 export 的JS物件
 * 當有給定 export default 的時候，import 的地方就可隨意命名
 */
 const course = {
     name: "react with spring boot",
     duration: 56,
     instructor: "Mark",
     period: ['Mon', 'Tue']
 }
 export default course