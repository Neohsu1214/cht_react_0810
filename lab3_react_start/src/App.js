import React from "react";
//import logo from './logo.svg';
import "./App.css";
import Dashboard1 from "./components/Dashboard1";
import Dashboard2 from "./components/Dashboard2";
import Person from "./components/Person";
import Pet from "./components/Pet";

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
    // React.createElement(
    //   "div",
    //   { className: "App" }, // 第二個參數是自定義組態object
    //   // 第三個以後的參數必須都是透過 React.createElememt產生的 Elements
    //   React.createElement("h1", null, "Hello World"),
    //   React.createElement("h2", null, "React Programming"),
    //   React.createElement("h3", null, "HiHi 尼小歐")
    // )

    // 改用 import 外部 component！直接在 div 內輸入 <component名稱> IDE外掛會自動幫你import進來
    // JSX tag名稱務必要與component名稱大小寫一致（這點跟Vue很不一樣）
    // JSX tag中可加入 attribute 來傳遞資料給 Components
    <div className="App">
      <Dashboard1></Dashboard1> 
      <Dashboard2></Dashboard2>
      <Person name="Mark" age="43"></Person>
      <Pet name="King" species="cat">喵</Pet>
      <Person name="James" age="38"></Person>
      <Person name="Tim" age="33">Team Leader</Person>
      <Person name="Mary" age="28"></Person>
      <Person name="Abby" age="34"></Person>
      <Person name="Kevin" age="50"></Person>
      <Pet></Pet>
    </div>
  );
}

export default App;
