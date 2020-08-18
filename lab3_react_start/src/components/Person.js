/**
 * 可透過『rfc』來建立一個 Functional Based Component 的 Template
 * react functional component
 * functinal component 可透過 arrow function 加以簡化！
 */
import React from "react";

// export default function Person() {
//     return (
//         <div>
//             <p>I am groot</p>
//         </div>
//     )
// }

// 可以簡寫成
//const Person = () => {
// 可在參數加入 props 來接收 父component 的參數內容
const Person = props => {
  return (
    <p>
      I am {props.name}, I am {props.age} years old. 
      I am the {Math.floor(Math.random() * 5)}th groot
    </p>
  );
  // JSX 中 {} 裡面可以放置 javascript 內容
};
export default Person;
