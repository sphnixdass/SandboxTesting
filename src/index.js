import React from "react";
import ReactDOM from "react-dom";
import Component1 from "./component1";
import { createStore } from "redux";
import { Provider } from "react-redux";

import reducer from "../store/reducer";

import "./styles.css";

const store = createStore(reducer);

function App() {
  console.log("hi dass");
  let classes = ["red", "bold"].join(" ");
  return (
    <div className="App">
      {true ? (
        <div>
          <h1 className={classes}>Hello CodeSandbox</h1>
          <h2>Start editing to see some magic happen!</h2>
          <Component1 />
        </div>
      ) : null}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);
