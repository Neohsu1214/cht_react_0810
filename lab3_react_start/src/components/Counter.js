/**
 * 使用 button onClick 搭配 function 說明事件處理與 state 處理
 * console 可以正常顯示異動過的 state 值
 * But 畫面上卻無法更新！？搞毛啊！？
 * 因為 React 為了 render 的效能，所以不會一直更新畫面
 * 若要修改則要透過 setState 必須透過setState來更新DOM
 * 會發現console.log輸出的state不一定會更新！因為 setState是非同步的動作！
 * 可以在setState後面加上callback function確認值是否已被更新
 */

import React, { Component } from "react";

export default class Counter extends Component {
  // 可透過『rcon』快速建立 constructor
  constructor(props) {
    super(props);

    this.state = {
      message: "counter=",
      count: 0,
    };
  }

  clickHandler = () => {
    // 1. 直接異動 state
    //this.state.count += 1 // 無法正常顯示在畫面上！必須透過setState來更新DOM
    // 2. 透過 setState 並給定新的值來更新 state
    // const nextVal = this.state.count + 1
    // this.setState({count: nextVal}, () => {
    //     console.log(`callback value = ${this.state.count}`)
    // })
    // 3. 使用 setState(prev, props)來更新 state，適用於多執行緒非同步處理
    this.setState(
      (prevState, props) => {
        return { count: prevState.count + parseInt(props.step) };
      },
      () => {
        console.log(`callback value = ${this.state.count}`);
      }
    );
    console.log(`button clicked ${this.state.count} times`);
  };

  /**
   * 寫一個連續觸發10次click的按鈕
   * But! 發現呼叫了10次卻沒改變state?!
   * 原因：React有一個處理event loop的機制，當出現race condition時，將 setState 的動作化簡成1次！！
   * 解法：使用 setState(prev, props)來更新 state
   */
  clickHandler10 = () => {
    this.clickHandler();
    this.clickHandler();
    this.clickHandler();
    this.clickHandler();
    this.clickHandler();
    this.clickHandler();
    this.clickHandler();
    this.clickHandler();
    this.clickHandler();
    this.clickHandler();
  };

  render() {
    return (
      <div>
        <h2>{this.state.message} {this.state.count}</h2>
        <button onClick={this.clickHandler}>click!</button>
        <button onClick={this.clickHandler10}>10x click!</button>
      </div>
    );
  }
}
