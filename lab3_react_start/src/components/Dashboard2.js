/**
 * 可透過輸入『rce』後自動產出 『可export的』 Class Based Component 的 Template
 * react class exportable component
 * 比 rcc 多出一段 export default Dashboard2
 */
import React, { Component } from 'react'

class Dashboard2 extends Component {
    render() {
        return (
            <div>
                Hi, I am Dashboard2
            </div>
        )
    }
}

export default Dashboard2
