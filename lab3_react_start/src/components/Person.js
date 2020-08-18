/**
 * 可透過『rfc』來建立一個 Functional Based Component 的 Template
 * react functional component
 * functinal component 可透過 arrow function 加以簡化！
 */
import React from 'react'

// export default function Person() {
//     return (
//         <div>
//             <p>I am groot</p>
//         </div>
//     )
// }

// 可以簡寫成
const Person = () => {
    return <p>I am groot</p>
}
export default Person