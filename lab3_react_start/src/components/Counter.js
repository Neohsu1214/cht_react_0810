/**
 * 使用 button onClick 搭配 function 說明事件處理與 state 處理
 * console 可以正常顯示異動過的 state 值
 * But 畫面上卻無法更新！？搞毛啊！？
 * 因為 React 為了 render 的效能，所以不會一直更新畫面
 * 若要修改則要透過 setState 必須透過setState來更新DOM
 */

import React, { Component } from "react";

export default class Counter extends Component {
  // 可透過『rcon』快速建立 constructor
  constructor(props) {
    super(props);

    this.state = {
        count: 0
    };
    
  }

  clickHandler = () => {
    //this.state.count += 1 // 無法正常顯示在畫面上！必須透過setState來更新DOM
    const nextVal = this.state.count + 1
    this.setState({count: nextVal})
    console.log(`button clicked ${this.state.count} times`)
  };

  render() {
    return (
      <div>
        <h2>counter = {this.state.count}</h2>
        <button onClick={this.clickHandler}>click!</button>
      </div>
    );
  }
}
