/**
 * 說明如何透過 props 傳遞資訊給 Class Based Component
 * 不同於 Functional Based Component，要用 this.props
 * 可透過 props.children 存取 父component tag 間的內容（類似Vue的slot）
 */
import React, { Component } from "react";

class Pet extends Component {
  render() {
    return (
      <div>
        <p>
          I am a {this.props.species}, named {this.props.name}
        </p>
        <p>I can {this.props.children}</p>
      </div>
    );
  }
}
export default Pet;
