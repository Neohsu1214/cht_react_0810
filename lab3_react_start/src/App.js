import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard1 from './components/Dashboard1';
import Dashboard2 from './components/Dashboard2';
import Person from './components/Person';
import Pet from './components/Pet';
import Counter from './components/Counter';
import Banner from './components/Banner';

//function App() {
class App extends Component {

  titleChangeListener = (event) => {
    this.setState({title: event.target.value})
  }

  state = {
    persons: [
      { name: "Mark", age: 43 },
      { name: "James", age: 38 },
      { name: "Tim", age: 33 },
      { name: "Mary", age: 28 },
      { name: "abby", age: 34 },
      { name: "Kevin", age: 50 }
    ],
    title: "Hello React chtti302",
    showPersons: false
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

  toggleDisplayHandler = () => {
    this.setState({ showPersons: !this.state.showPersons })
  }

  deletePersonHandler = personIndex => {
    //const persons = this.state.persons
    const persons = [...this.state.persons]
    persons.splice(personIndex, 1)
    this.setState({ persons: persons })
  }

  render() {
    // 宣告一個區域型CSS
    const style = {
      background: "yellow",
      font: "inherit",
      border: "2px solid red",
      padding: "4px",
      cursor: 'pointer'
    };

    // 將要顯示/隱藏的 JSX 區塊提出來設定，增加程式可讀性
    let personsJSX = null;
    if (this.state.showPersons === true) {
      personsJSX = (<div>{
        this.state.persons.map((person, index) => {
          return <Person
            key={index}
            clickCallback={() => this.deletePersonHandler(index)}
            name={person.name} age={person.age} />
        })
      }</div>)
      style.backgroundColor = 'red'
      style.color='black'
    }    

    // return 的內容其實是 JSX(JavaScriptXML) 而不是 HTML，需要經過React轉換輸出成 HTML+JS+CSS
    // return 的內容只能有一個 root <div>
    return (
      // 改用 import 外部 component！直接在 div 內輸入 <component名稱> IDE外掛會自動幫你import進來
      // JSX tag名稱務必要與component名稱大小寫一致（這點跟Vue很不一樣）
      // JSX tag中可加入 attribute 來傳遞資料給 Components
      <div className="App">
        <Counter step="2"></Counter>
        <h1>{this.state.title}</h1>
        {
          // 藉由 props 傳遞 state資料 與 callback函數 來做到與子元件之雙向綁定
        }
        <Banner 
          clickCallback={this.titleChangeListener}
          name={this.state.title}
        ></Banner>
        <Dashboard1></Dashboard1>
        <Dashboard2></Dashboard2>
        {
          // 在JSX中的註解寫法
          // <button onClick={this.changeNameHandler.bind(this, "One Punchman")}>Change</button>
        }
        <button style={style} onClick={() => this.toggleDisplayHandler()}> show/hide Persons </button>
        <button style={style} onClick={() => this.changeNameHandler("One Punchman")}>Change</button>
        {personsJSX}
      </div>
    );
  }
}

export default App;
