/**
 * 可透過『rfc』來建立一個 Functional Based Component 的 Template
 * react functional component
 * functinal component 可透過 arrow function 加以簡化！
 * 說明如何透過 props 傳遞資訊給 Functional Based Component
 */
import React, {useState} from "react";
import "./Person.css"

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
  // 讓 functional component 也可以用 state (理論上是不行的，所以要宣告成 const)
  const [stateString, changeString] = useState({
    publishier: "Marvel Universe",
    studio: "Disney"
  })
  // 雖然 state 宣告成 const，但還是想異動內容！就要靠callback function的指定！
  const switchVendorHandler = () => {
    // 注意：此行為叫 React Hook，會用新的state覆蓋掉舊的state值，所以如果有要保留的要自行實作 ex: stateString.studio
    changeString({publishier: "DC Universe", studio: stateString.studio})
  }
  const showStatusHandler = () => {
    console.log(stateString)
  }
  return (
    <div className="Person">
      <button onClick={switchVendorHandler}>Change!</button>
      <button onClick={showStatusHandler}>Show!</button>
      <button onClick={props.clickCallback}>Delete!</button>
      <h1>{stateString.publishier}</h1>
      <p>I am {props.name}</p>
      <p>I am {props.age} years old</p>
      <p>I am the {Math.floor(Math.random() * 5)}th groot</p>
      <p style={{ color: "red" }}>My job function is {props.children}</p>
    </div>
  );
  // JSX 中 {} 裡面可以放置 javascript 內容
};
export default Person;
