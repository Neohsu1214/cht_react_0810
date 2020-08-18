/**
 * 說明如何透過 props 傳遞資訊給 Class Based Component
 * 不同於 Functional Based Component，要用 this.props
 */
import React, { Component } from 'react'

class Pet extends Component {
    render() {
        return (
            <div>
            I am a {this.props.species}, named {this.props.name}
            </div>
        )
    }
}
export default Pet