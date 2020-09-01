/**
 * 建立一個 Functional Component (short: rfce)
 */
import React from 'react'
import { connect } from 'react-redux' // 同樣是 react-redux 但不同於App.js 的Provider 這邊是 connect
import { buyCoke } from '../redux/coke/CokeAction'


function CokeContainer(props) {
    return (
        <div>
            <h3># of Coke={props.numOfCokes}</h3>
            <button onClick={props.buyCoke}>Buy Coke</button>
        </div> 
    )
}
const mapStateToProps = (state) => {
    return {
        numOfCokes: state.numOfCokes
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        buyCoke: () => dispatch(buyCoke())
    }
}

// 透過 connect 將 State, Dispatch 與 Props 關聯起來
export default connect(mapStateToProps, mapDispatchToProps)(CokeContainer)
