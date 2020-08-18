import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard1 from './components/Dashboard1';
import Dashboard2 from './components/Dashboard2';
import Person from './components/Person';
import Pet from './components/Pet';
import Counter from './components/Counter';

//function App() {
class App extends Component {
  state = {
    persons: [
      { name: "Mark", age: 43 },
      { name: "James", age: 38 },
      { name: "Tim", age: 33 },
      { name: "Mary", age: 28 },
      { name: "abby", age: 34 },
      { name: "Kevin", age: 50 }

    ]
  }

  changeNameHandler = (leaderName) => {
    console.log("change button clicked")    
    this.setState({
      persons: [
        {name: leaderName, age: 45},
        {name: "Captain America", age: 35},
        {name: "Iron man", age: 42},
        {name: "Thor", age: 200},
        {name: "Groot", age: 5},
        {name: "Hawk", age: 40}
      ]
    })
  }

  render() {
    // return 的內容其實是 JSX(JavaScriptXML) 而不是 HTML，需要經過React轉換輸出成 HTML+JS+CSS
    // return 的內容只能有一個 root <div>
    return (
      // 改用 import 外部 component！直接在 div 內輸入 <component名稱> IDE外掛會自動幫你import進來
      // JSX tag名稱務必要與component名稱大小寫一致（這點跟Vue很不一樣）
      // JSX tag中可加入 attribute 來傳遞資料給 Components
      <div className="App">
        <Counter step="2"></Counter>
        <Dashboard1></Dashboard1>
        <Dashboard2></Dashboard2>
        {
          // 在JSX中的註解寫法
          // <button onClick={this.changeNameHandler.bind(this, "One Punchman")}>Change</button>
        }
        <button onClick={() => this.changeNameHandler("One Punchman")}>Change</button>
        <Person 
          clickCallback={this.changeNameHandler.bind(this, "Peter Pan")}
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} />
        <Pet name="King" species="cat">
          <p style={{ color: "green" }}>喵</p>
        </Pet>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}></Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>
          Team Leader
        </Person>
        <Person name={this.state.persons[3].name} age={this.state.persons[3].age}></Person>
        <Person name={this.state.persons[4].name} age={this.state.persons[4].age}></Person>
        <Person name={this.state.persons[5].name} age={this.state.persons[5].age}></Person>
        <Pet></Pet>
      </div>
    );
  }
}

export default App;
