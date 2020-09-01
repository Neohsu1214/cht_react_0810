/**
 * 改用另一種寫法(connect hook)來關聯 state, dispatch 與 props 的關係
 */

import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {buyCoke} from '../redux' // 由 redux 目錄引用 buyCoke

function HookCokeContainer() {
    const numOfCokes = useSelector(state => state.coke.numOfCokes)
    const dispatch = useDispatch()

    return (
        <div>
            <h3>[Hook] Num of Cokes= {numOfCokes}</h3>
            <button onClick={()=>dispatch(buyCoke())}>Buy Coke</button>
        </div>
    )
}

export default HookCokeContainer
