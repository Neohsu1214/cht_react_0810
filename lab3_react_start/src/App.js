import React from "react";
//import logo from './logo.svg';
import "./App.css";

function App() {
  // return 的內容其實是 JSX(JavaScriptXML) 而不是 HTML，需要經過React轉換輸出成 HTML+JS+CSS
  // return 的內容只能有一個 root <div>
  return (
    // <div className="App">
    //   <h1>Hello World</h1>
    //   <h2>React Programming</h2>
    //   <h3>HiHi 尼小歐</h3>
    // </div>

    // 改用 React.createElement 來達到同樣的輸出結果
    React.createElement(
      "div",
      { className: "App" }, // 第二個參數是自定義組態object
      // 第三個以後的參數必須都是透過 React.createElememt產生的 Elements
      React.createElement("h1", null, "Hello World"),
      React.createElement("h2", null, "React Programming"),
      React.createElement("h3", null, "HiHi 尼小歐")
    )
  );
}

export default App;
