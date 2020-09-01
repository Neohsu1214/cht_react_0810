import { createStore } from "redux";
import cokeReducer from "./coke/CokeReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(cokeReducer, composeWithDevTools());
export default store;
