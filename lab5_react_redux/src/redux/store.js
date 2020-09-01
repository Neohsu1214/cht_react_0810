import {createStore} from "redux"
import cokeReducer from "./coke/CokeReducer"

const store = createStore(cokeReducer)
export default store