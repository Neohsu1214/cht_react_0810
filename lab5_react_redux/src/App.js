import React from "react";
import "./App.css";
import CokeContainer from "./components/CokeContainer";
import { Provider } from "react-redux"; 
import store from "./redux/store";
import HookCokeContainer from "./components/HookCokeContainer";

/**
 * Provider 是 hook React 與 Redux store 的 bridge
 * Provider 取代 div 成為最上層的 tag，所以我們稱 Provider 是一種 HOC(High Order Component) 
 */ 
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CokeContainer />
        <HookCokeContainer/>
      </div>
    </Provider>
  );
}

export default App;
