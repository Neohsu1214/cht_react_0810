/**
 * 可透過『rfc』來建立一個 Functional Based Component 的 Template
 * react functional component
 * functinal component 可透過 arrow function 加以簡化！
 * 說明如何透過 props 傳遞資訊給 Functional Based Component
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
// 可透過 props.xxx 接收 父component 的參數內容
// 可透過 props.children 存取 父component tag 間的內容（類似Vue的slot）
const Person = (props) => {
  return (
    <div>
      <p>I am {props.name}</p>
      <p>I am {props.age} years old</p>
      <p>I am the {Math.floor(Math.random() * 5)}th groot</p>
      <p style={{ color: "red" }}>My job function is {props.children}</p>
    </div>
  );
  // JSX 中 {} 裡面可以放置 javascript 內容
};
export default Person;
