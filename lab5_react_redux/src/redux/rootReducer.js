import {combineReducers} from 'redux'
import fantaReducer from './fanta/FantaReducer'
import cokeReducer from './coke/CokeReducer'

const rootReducer = combineReducers({
    coke: cokeReducer,
    fanta: fantaReducer
})
export default rootReducer